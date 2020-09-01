/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const SORT_TYPES = ['desc', 'asc'];
const LANG = ['en', 'ru'];


export function sortStrings(arr, param = 'asc') {
  const newArray = [].concat(arr);

  return newArray.sort((a, b) => {
    const comparedPairs = param === 'asc' ?
      [a, b] :
      [b, a];

    return new Intl.Collator(LANG, { caseFirst: 'upper' }).compare(...comparedPairs);
  });
}

