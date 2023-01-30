import { getBubbleSortAnimationsArray } from "../sortingAlgorithms/bubbleSort";
import { sortedGreen } from "../helpers/sortedGreen";

export function runBubbleSortAnimations(
  setIsPlaying,
  setIsSorted,
  speed,
  copiedArray,
  array
) {
  setIsPlaying(true);
  const animations = getBubbleSortAnimationsArray(copiedArray);
  const n = animations.length;
  for (let i = 0; i < n; i++) {
    const arrayBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? "red" : "purple";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [barOneHeight, barTwoHeight, barOneIdx, barTwoIdx] =
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
