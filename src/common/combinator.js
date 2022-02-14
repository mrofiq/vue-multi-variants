function combine(curr, vararr) {
  function toArray(x) {
    if (!Array.isArray(x)) return [x];
    return x;
  }
  if (Array.isArray(curr)) return curr.flatMap((x) => combine(x, vararr));
  return vararr.map((x) => [curr, ...toArray(x)]);
}

function combineOfArray(listofVariant) {
  if (Array.isArray(listofVariant)) {
    // skip if element only 1
    if (listofVariant.length == 1) return listofVariant[0].map((x) => [x]);
    // combine all
    return listofVariant.reduceRight((accumulator, currentValue) =>
      combine(currentValue, accumulator)
    );
  }
}

export { combine, combineOfArray };
