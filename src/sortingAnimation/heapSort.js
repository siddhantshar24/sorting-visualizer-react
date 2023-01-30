import { getHeapSortAnimationsArray } from "../sortingAlgorithms/heapSort";
import { sortedGreen } from "../helpers/sortedGreen";

export function runHeapSortAnimations(
  setIsPlaying,
  setIsSorted,
  speed,
  copiedArray,
  array
) {
  setIsPlaying(true);
  const animations = getHeapSortAnimationsArray(copiedArray);
  const n = animations.length;
  console.log(animations);

  for (let i = 0; i < n; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    let isColorChange = false;
    if (animations[i][0] === 0 || animations[i][0] === 1) {
      isColorChange = true;
    }
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
        const [x, barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
          animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        barOneStyle.height = `${barOneHeight}px`;
        barTwoStyle.height = `${barTwoHeight}px`;
      }, i * speed);
    }
  }
  sortedGreen(setIsPlaying, setIsSorted, speed, array, n);
}
