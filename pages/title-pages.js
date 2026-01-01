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

import {ui} from '../utils/mini-ui.js'

const [title, images, paragraph] = [ui.title, ui.images, ui.paragraph];

let titlePages = {
    productPage: [
        [title],
        "PRODUCT 产品设计",
        [images, [1, 1]],
        {url: "image/product/off-road-motorcycle.jpg", width: 1500, height: 950},
        {url: "image/product/hover-camera.jpg", width: 1500, height: 1185},
        [images, [1, 1, 1]],
        {url: "image/product/e-bicycle.jpg", width: 1500, height: 1000},
        {url: "image/product/e-moped.jpg", width: 900, height: 812},
        {url: "image/product/censer.jpg", width: 800, height: 834},
        [images, [1, 1]],
        {url: "image/product/sunny-cube.jpg", width: 1500, height: 843},
        {url: "image/product/big-dog.jpg", width: 1500, height: 842},
        [images, [1, 1]],
        {url: "image/product/exoskeleton-insole.jpg", width: 1500, height: 1078},
        {url: "image/product/modular-router.jpg", width: 1500, height: 843},
        [images, [1, 1]],
        {url: "image/product/monmentum.jpg", width: 1500, height: 844},
        {url: "image/product/mooa.jpg", width: 1500, height: 844},
        [images, [1, 1]],
        {url: "image/product/ophthalmological.jpg", width: 2000, height: 1030},
        {url: "image/product/medical-product.jpg", width: 1500, height: 1061},
        [images, [1]],
        {url: "image/product/cmf.png", width: 1341, height: 624},
        [images, [1, 1]],
        {url: "image/product/sterilizing-equipment.jpg", width: 1341, height: 1288},
        {url: "image/product/ai.jpg", width: 1500, height: 904}
    ],
    exhibitionPage: [
        [title],
        "EXHIBITION 活动"
    ],
    recherchePage: [
        [title],
        "RECHERCHE  课题"
    ],
};

window.titlePages = titlePages;
