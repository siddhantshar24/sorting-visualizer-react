export function getQuickSortAnimationsArray(array) {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;
  quickSort(array, 0, n - 1, animations);
  return animations;
}
function quickSort(arr, low, high, animations) {
  if (low >= high) {
    return;
  }
  let piv = partition(arr, low, high, animations);
  quickSort(arr, low, piv - 1, animations);
  quickSort(arr, piv + 1, high, animations);
}
function partition(arr, low, high, animations) {
  var pivot = arr[high],
    i = low,
    prevI;
  for (let j = low; j < high; j++) {
    prevI = i;
    if (arr[j] < pivot) {
      swap(arr, i++, j);
    }
    animations.push([j, high]);
    animations.push([j, high]);
    animations.push([arr[prevI], arr[j], prevI, j]);
    animations.push([1000]);
  }
  swap(arr, i, high);
  animations.push([i, high]);
  animations.push([i, high]);
  animations.push([arr[i], arr[high], i, high]);
  animations.push([i]);
  return i;
}
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
