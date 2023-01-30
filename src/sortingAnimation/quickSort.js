import { getQuickSortAnimationsArray } from "../sortingAlgorithms/quickSort";
import { sortedGreen } from "../helpers/sortedGreen";

export function runQuickSortAnimations(
  setIsPlaying,
  setIsSorted,
  speed,
  copiedArray,
  array
) {
  setIsPlaying(true);
  const animations = getQuickSortAnimationsArray(copiedArray);
  const n = animations.length;

  for (let i = 0; i < n; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    let isColorChange = false;
    if (i % 4 === 0 || i % 4 === 1) {
      isColorChange = true;
    }
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 4 === 0 ? "red" : "purple";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else if (i % 4 === 2) {
      setTimeout(() => {
        const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
          animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barOneHeight}px`;
        barTwoStyle.height = `${barTwoHeight}px`;
      }, i * speed);
    } else if (i % 4 === 3) {
      setTimeout(() => {
        const [pivotBarIdx] = animations[i];
        if (pivotBarIdx !== 1000) {
          const pivotBarStyle = arrayBars[pivotBarIdx].style;
          pivotBarStyle.backgroundColor = "#E9897E";
        }
      }, i * speed);
    }
  }
  sortedGreen(setIsPlaying, setIsSorted, speed, array, n);
}
