const regEx = /(_|-|,|:|\/|\s|\.|\\)/;

export function upperFirst(str: string) {
    return str[0].toUpperCase().concat(str.substring(1));
}

export function capitalize(str: string) {
    const words = str.split(regEx).filter((w) => !regEx.test(w));
    return words.reduce((acc, word) => {
        acc += upperFirst(word.toLowerCase());
        return acc;
    }, "");
}

export function camelCase(str: string) {
    const words = str.split(regEx).filter((w) => !regEx.test(w));
    return words.reduce((acc, word, idx) => {
        if (idx > 0) acc += capitalize(word);
        else acc += word.toLowerCase();
        return acc;
    }, "");
}

export function snakeCase(str: string) {
    str = str.trim();

    let currWordIdx = 0;
    const words: string[] = [];

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        const nextCh = str?.[i + 1];
        const isUpperCase = ch && ch === ch.toUpperCase();
        const isNextUpperCase = nextCh && nextCh === nextCh.toUpperCase();
        if (!words[currWordIdx]) {
            words[currWordIdx] = "";
        }
        words[currWordIdx] += isUpperCase ? ch.toLowerCase() : ch;
        if (isNextUpperCase) {
            currWordIdx++;
        }
    }

    return words.join("_");
}

export const dbToTs = (prop: string) => {
    return camelCase(prop);
};

export const tsToDb = (prop: string) => {
    return snakeCase(prop);
};
