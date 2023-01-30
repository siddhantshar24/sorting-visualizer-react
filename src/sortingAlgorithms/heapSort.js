export function getHeapSortAnimationsArray(array) {
  const animations = [];
  const n = array.length;
  if (n <= 1) return array;

  for (let i = parseInt(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n - 1; i > 0; i--) {
    const temp = array[0];
    array[0] = array[i];
    array[i] = temp;
    animations.push([0, 0, i]);
    animations.push([1, 0, i]);
    animations.push([2, array[0], array[i], 0, i]);
    heapify(array, i, 0, animations);
  }
  return animations;
}

function heapify(arr, n, i, animations) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
    animations.push([0, i, l]);
    animations.push([1, i, l]);
  }

  if (r < n && arr[r] > arr[largest]) {
    largest = r;
    animations.push([0, i, r]);
    animations.push([1, i, r]);
  }

  if (largest !== i) {
    const swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;
    animations.push([2, arr[i], arr[largest], i, largest]);
    heapify(arr, n, largest, animations);
  }
}
