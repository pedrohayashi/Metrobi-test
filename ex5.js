function eggDrop(n, k) {
    const eggFloor = Array(n + 1).fill(0).map(() => Array(k + 1).fill(0));

    // If only one floor, return 1, if 0 floors return 0
    for (let i = 1; i <= n; i++) {
        eggFloor[i][1] = 1;
        eggFloor[i][0] = 0;
    }

    // Fill for 1 egg for j floors.
    for (let j = 1; j <= k; j++) {
        eggFloor[1][j] = j;
    }

    // Fill rest of the entries in table using optimal substructure
    for (let i = 2; i <= n; i++) {
        for (let j = 2; j <= k; j++) {
            eggFloor[i][j] = Number.MAX_VALUE;
            for (let x = 1; x <= j; x++) {
                const res = 1 + Math.max(eggFloor[i - 1][x - 1], eggFloor[i][j - x]);
                if (res < eggFloor[i][j]) {
                    eggFloor[i][j] = res;
                }
            }
        }
    }

    // eggFloor[n][k] holds the result
    return eggFloor[n][k];
}
