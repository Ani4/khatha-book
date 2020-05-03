const { ExtractionFromString } = require("./OcrMiddleware");

console.log(
    ExtractionFromString(`
    mango - 3000
    de - 342
    dfasg - 234.23
    asdfs - 42.342
    de - 342
    dfasg - 23423
    asdfs - 42342
    de - 342
    dfasg - 23423
    asdfs - 42342
    de - 342
    dfasg - 23423
    asdfs - 42342

    `)
);
