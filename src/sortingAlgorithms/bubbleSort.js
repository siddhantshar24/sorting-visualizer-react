export function getBubbleSortAnimationsArray(array) {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      animations.push([array[j], array[j + 1], j, j + 1]);
    }
  }
  return animations;
}
