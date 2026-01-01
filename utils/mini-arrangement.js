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

import {solveLinearEquation} from './mini-math.js'

export const [ArrangementSpaceAround, ArrangementSpaceBetween, ArrangementSpaceEvenly] = [0, 1, 2];

const ArrangementValidTypes = [ArrangementSpaceAround, ArrangementSpaceBetween, ArrangementSpaceEvenly];

// evenly: ----[]----[]----[]----
// around: --[]----[]----[]--
// between: []----[]----[]
export function arrangement2D(width, elements, arrangementType, space) {

    // 校验arrangementType
    if (!ArrangementValidTypes.includes(arrangementType)) {
        console.error(`Invalid arrangementType: ${arrangementType}. Expected:${ArrangementValidTypes.join(' or ')}`);
        return null;
    }

    // 计算每个元素的宽高比总和
    const ratios = elements.map(group =>
        group.reduce((sum, item) => sum + item.height / item.width, 0)
    );

    // 计算可用空间
    const availableSpace = {
        [ArrangementSpaceEvenly]: width - (elements.length + 1) * space,
        [ArrangementSpaceAround]: width - elements.length * space,
        [ArrangementSpaceBetween]: width - (elements.length - 1) * space
    }[[arrangementType]];

    // 构建线性方程组
    const matrix = elements.map((_, k) => {
        if (k === 0) {
            return new Array(elements.length).fill(1);
        } else {
            const row = new Array(elements.length).fill(0);
            row[0] = ratios[0];
            row[k] = -ratios[k];
            return row;
        }
    });

    // 构建结果向量
    const results = elements.map((_, k) => {
        if (k === 0) {
            return availableSpace;
        }
        return (elements[0].length - elements[k].length) * space;
    });

    const sizes = solveLinearEquation(matrix, results);

    // 应用计算结果
    elements.forEach((group, i) => {
        group.forEach(item => {
            const ratio = item.height / item.width;
            item.width = sizes[i];
            item.height = sizes[i] * ratio;
        });
    });
}
