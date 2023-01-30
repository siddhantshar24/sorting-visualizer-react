export function changeArrayHelper(
  setIsSorted,
  array,
  setCopiedArray,
  setSameArray,
  setArray,
  setWidth,
  setSpeed,
  size,
  randomNoGenerator
) {
  setIsSorted(false);
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(randomNoGenerator(5, 630));
  }
  setArray(arr);
  setCopiedArray([...arr]);
  setSameArray([...arr]);
  setWidth(920 / arr.length);
  const arrayBars = document.getElementsByClassName("array-bar");
  for (let i = 0; i < array.length; i++) {
    arrayBars[i].style.backgroundColor = "purple";
  }
  setSpeed((2 * 500) / size);
  return arr;
}
