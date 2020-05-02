let numberPattern = /\d+[.\d]+/g;
let wordPattern = /[A-z]+/g;

exports.ExtractionFromString = (req, res, next) => {
    // let source = req.body.source || req;
    let source = req;
    let total;
    //   console.log(source);
    let arr = source.split("\n").map((item) => item.trim().replace(/\s+/g, ""));
    //   extracting data array
    let finalProduct = arr
        .map((item) =>
            Boolean(item.length)
                ? {
                      [item.match(wordPattern)]: +item.match(numberPattern),
                  }
                : false
        )
        .filter((item) => item);
    //   console.log(finalProduct);
    total = finalProduct
        .map((item) => Object.values(item)[0])
        .reduce((pv, item) => pv + item);

    return { finalProduct, total };
};
