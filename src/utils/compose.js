export const compose = (...functions) => comp => {
    return functions.reduceRight((wrapped, fn) => fn(wrapped), comp)
};