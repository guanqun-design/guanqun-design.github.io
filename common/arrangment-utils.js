/**
 * MIT License
 *
 * Copyright (c) 2025 guanqun-design https://guanqun-design.github.io
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

const ArrangementSpaceAround = "spaceAround";
const ArrangementSpaceBetween = "spaceBetween";
const ArrangementValidTypes = [ArrangementSpaceAround, ArrangementSpaceBetween];

function arrangement2D(container, elements, arrangementType, space) {

    // 校验arrangementType
    if (!ArrangementValidTypes.includes(arrangementType)) {
        console.error(`Invalid arrangementType: ${arrangementType}. Expected:${ArrangementValidTypes.join(' or ')}`);
        return null;
    }

    // 计算每个元素的宽高比总和
    const ratios = elements.map(group =>
        group.stream.reduce((sum, item) => sum + item.width / item.height, 0)
    );

    // 计算可用空间
    const availableSpace = arrangementType === ArrangementSpaceAround
        ? container.height - (elements[0].length + 1) * space
        : container.height - (elements[0].length - 1) * space;

    // 构建线性方程组
    const matrix = elements.map((_, k) => {
        const row = new Array(elements.length).fill(0);
        if (k === 0) {
            row.fill(1);
        } else {
            row[0] = -ratios[0];
            row[k] = ratios[k];
        }
        return row;
    });

    // 构建结果向量
    const results = elements.map((_, k) => {
        if (k === 0) {
            return arrangementType === ArrangementSpaceAround
                ? container.width - (elements.length + 1) * space
                : container.width - (elements.length - 1) * space;
        }
        return 0;
    });

    const sizes = solveLinearEquation(matrix, results);

    // 应用计算结果
    elements.forEach((group, i) => {
        group.forEach(item => {
            item.width = sizes[i];
            item.height = sizes[i] * item.height / item.width;
        });
    });
}
