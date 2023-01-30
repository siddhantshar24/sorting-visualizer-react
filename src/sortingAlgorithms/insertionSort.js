export function getInsertionSortAnimationsArray(array) {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      animations.push([0, i, j]);
      animations.push([1, i, j]);
      animations.push([2, j + 1, array[j + 1]]);
      j = j - 1;
    }
    array[j + 1] = key;
    animations.push([2, j + 1, array[j + 1]]);
  }
  return animations;
}
