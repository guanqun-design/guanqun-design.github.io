
function solveLinearEquation(A, y) {

    const n = A.length;

    // --- 1. 输入验证 ---
    if (A[0].length !== n) {
        throw new Error("系数矩阵 A 必须是方阵");
    }
    if (y.length !== n) {
        throw new Error("向量 y 的维度必须与矩阵 A 的维度匹配");
    }

    // --- 2. 创建增广矩阵 [A|y] ---
    // 使用深拷贝，避免修改原始输入
    const aug = A.map((row, i) => [...row, y[i]]);

    // --- 3. 高斯-若尔当消元 ---
    for (let col = 0; col < n; col++) {
        // --- 3.1 主元选择：找到当前列中绝对值最大的行，并交换到当前行 ---
        let pivotRow = col;
        for (let r = col + 1; r < n; r++) {
            if (Math.abs(aug[r][col]) > Math.abs(aug[pivotRow][col])) {
                pivotRow = r;
            }
        }

        // 如果主元为0，说明矩阵是奇异的，可能无解或有无穷解
        if (Math.abs(aug[pivotRow][col]) < 1e-10) {
            throw new Error("矩阵是奇异的，方程组可能无解或有无穷多解");
        }

        // 交换行
        [aug[col], aug[pivotRow]] = [aug[pivotRow], aug[col]];

        // --- 3.2 将主元所在行的主元元素归一化为 1 ---
        const pivot = aug[col][col];
        for (let c = col; c <= n; c++) {
            aug[col][c] /= pivot;
        }

        // --- 3.3 消去当前列的其他所有元素 ---
        for (let r = 0; r < n; r++) {
            if (r !== col) {
                const factor = aug[r][col];
                for (let c = col; c <= n; c++) {
                    aug[r][c] -= factor * aug[col][c];
                }
            }
        }
    }

    // --- 4. 提取解 ---
    // 此时增广矩阵的右侧就是解向量 x
    return aug.map(row => row[n]);
}
