/**
 * MIT License
 *
 * Copyright (c) 2025-2026 guanqun-design
 * https://guanqun-design.github.io
 * https://zhangguanqun.cn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {ArrangementSpaceEvenly, arrangement2D} from './mini-arrangement.js';

export let ui = {
    title: 0,
    subtitle: 1,
    paragraph: 2,
    images: 3,
    pages: 4,
    items: 5,
    catalog: 6,
}

window.ui = ui;

const space = 12;

function iterator2(arr) {
    const iter = arr[Symbol.iterator]();
    return {
        next: function () {
            return iter.next();
        },
        nextBatch: function (n) {
            return Array.from({length: n}, () => iter.next().value);
        }
    };
}

function createSpace(document, space) {
    const container = document.createElement('div');
    container.style.height = space + 'px';
    return container;
}

function createPage(document, width, flatten) {
    const container = document.createElement('div');
    container.style.width = width + "px";
    const iter = iterator2(flatten);
    const handlers = {
        [ui.title]: () => {
            const title = document.createElement('h1');
            title.innerText = iter.next().value;
            title.style.paddingLeft = space + 'px';
            title.style.paddingRight = space + 'px';
            return title;
        },
        [ui.paragraph]: () => {
            const paragraph = document.createElement('p');
            paragraph.innerText = iter.next().value;
            paragraph.style.paddingLeft = space + 'px';
            paragraph.style.paddingRight = space + 'px';
            return paragraph;
        },
        [ui.images]: ([_, vec]) => {
            const elements = Array.from({length: vec.length}, (_, id) => iter.nextBatch(vec[id]));
            arrangement2D(width, elements, ArrangementSpaceEvenly, space);
            const height = elements[0].reduce((sum, item) => sum + item.height, 0) + (elements[0].length - 1) * space;
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.justifyContent = 'space-evenly';
            row.style.width = `${width}px`;
            row.style.height = `${height}px`;
            for (let i = 0; i < elements.length; i++) {
                const column = document.createElement('div');
                row.appendChild(column);
                column.style.display = 'flex';
                column.style.flexDirection = 'column';
                column.style.justifyContent = 'space-between';
                column.style.width = `${elements[i][0].width}px`;
                column.style.height = `${height}px`;
                elements[i].forEach(element=>{
                    const image = document.createElement('img');
                    column.appendChild(image);
                    image.src = element.url;
                    image.style.width = `${element.width}px`;
                    image.style.height = `${element.height}px`;
                    image.style.borderRadius = '8px';
                    image.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                });
            }
            return row;
        },
    };
    for (let i = 0; i < 1000; i++) {
        const meta = iter.next();
        if (meta.done) {
            break;
        }
        container.appendChild(handlers[[meta.value[0]]](meta.value));
        container.appendChild(createSpace(document, space));
    }
    return container;
}

function createLeftNavigateApp(document, width, height, sidebarWidth, flatten) {

    const container = document.createElement('div');
    container.style.width = width + "px";
    container.style.height = height + "px";
    container.style.display = 'flex';

    const sidebar = document.createElement('div');
    container.appendChild(sidebar);
    sidebar.style.width = sidebarWidth + "px";

    const page = document.createElement('div');
    container.appendChild(page);
    page.style.width = (width - sidebarWidth) + "px";

    const iter = iterator2(flatten);
    const handlers = {
        [ui.title]: () => {
            const title = document.createElement('h2');
            title.innerText = iter.next().value;
            return title;
        },
        [ui.items]: ([_, n]) => {
            const ul = document.createElement('ul');
            for (let i = 0; i < n; i++) {
                const li = document.createElement('li');
                ul.appendChild(li);
                const [text, _page] = iter.next().value;
                li.innerText = text;
                li.addEventListener('click', () => {
                    page.replaceChildren(createPage(document, width - sidebarWidth, _page));
                })
            }
            return ul;
        },
    };

    for (let i = 0; i < 1000; i++) {
        const meta = iter.next();
        if (meta.done) {
            break;
        }
        sidebar.appendChild(handlers[[meta.value[0]]](meta.value));
    }

    return container;
}

window.createLeftNavigateApp = createLeftNavigateApp;