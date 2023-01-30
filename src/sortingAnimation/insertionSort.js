import { getInsertionSortAnimationsArray } from "../sortingAlgorithms/insertionSort";
import { sortedGreen } from "../helpers/sortedGreen";

export function runInsertionSortAnimations(
  setIsPlaying,
  setIsSorted,
  speed,
  copiedArray,
  array
) {
  setIsPlaying(true);
  const animations = getInsertionSortAnimationsArray(copiedArray);
  const n = animations.length;

  for (let i = 0; i < n; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = animations[i][0] === 0 || animations[i][0] === 1;
    if (isColorChange) {
      const [x, barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = x === 1 ? "purple" : "red";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [x, barIdx, barHeight] = animations[i];
        const barStyle = arrayBars[barIdx].style;
        barStyle.height = `${barHeight}px`;
      }, i * speed);
    }
  }
  sortedGreen(setIsPlaying, setIsSorted, speed, array, n);
}
