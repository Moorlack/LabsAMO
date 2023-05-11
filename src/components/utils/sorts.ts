function simpleInserts(values: number[]) {
    const n = values.length
    for(let j = 1; j < n; j++) {
        let key = values[j];
        let i = j - 1;

        while(i >= 0 && values[i] > key) {
            values[i + 1] = values[i];
            i = i - 1;
        }

        values[i + 1] = key;
    }

    return values;
}



export {simpleInserts}