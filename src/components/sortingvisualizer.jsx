import React, { useState, useEffect } from "react";

import ButtonControl from "./buttonControl";

import { runInsertionSortAnimations } from "../sortingAnimation/insertionSort";
import { runQuickSortAnimations } from "../sortingAnimation/quickSort";
import { runMergeSortAnimations } from "../sortingAnimation/mergeSort";
import { runHeapSortAnimations } from "../sortingAnimation/heapSort";
import { runBubbleSortAnimations } from "../sortingAnimation/bubbleSort";

import { changeArrayHelper } from "../helpers/changeArray";

import "./sortingvisualizer.css";

const SortingVisualisation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [width, setWidth] = useState(0);
  const [copiedArray, setCopiedArray] = useState([]);
  const [speed, setSpeed] = useState(2);
  const [sameArray, setSameArray] = useState([]);

  useEffect(() => {
    changeArray(50);
  }, []);

  const randomNoGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const changeArraySize = (event) => {
    setSize(parseInt(event.target.value));
    changeArray(parseInt(event.target.value));
  };

  const changeArray = (size) => {
    if (isPlaying === false) {
      changeArrayHelper(
        setIsSorted,
        array,
        setCopiedArray,
        setSameArray,
        setArray,
        setWidth,
        setSpeed,
        size,
        randomNoGenerator
      );
    }
  };

  const resetArray = () => {
    if (isPlaying === false) {
      setIsSorted(false);
      setArray([...sameArray]);
      setCopiedArray([...sameArray]);
      const arrayBars = document.getElementsByClassName("array-bar");
      for (let i = 0; i < array.length; i++) {
        arrayBars[i].style.backgroundColor = "purple";
        arrayBars[i].style.height = `${array[i]}px`;
      }
    }
  };

  const insertionSort = () => {
    if (isPlaying === false && isSorted === false) {
      runInsertionSortAnimations(
        setIsPlaying,
        setIsSorted,
        speed,
        copiedArray,
        array
      );
    }
  };

  const quickSort = () => {
    if (isPlaying === false && isSorted === false) {
      runQuickSortAnimations(
        setIsPlaying,
        setIsSorted,
        speed,
        copiedArray,
        array
      );
    }
  };

  const mergeSort = () => {
    if (isPlaying === false && isSorted === false) {
      runMergeSortAnimations(
        setIsPlaying,
        setIsSorted,
        speed,
        copiedArray,
        array
      );
    }
  };

  const heapSort = () => {
    if (isPlaying === false && isSorted === false) {
      runHeapSortAnimations(
        setIsPlaying,
        setIsSorted,
        speed,
        copiedArray,
        array
      );
    }
  };

  const bubbleSort = () => {
    if (isPlaying === false && isSorted === false) {
      runBubbleSortAnimations(
        setIsPlaying,
        setIsSorted,
        speed,
        copiedArray,
        array
      );
    }
  };

  return (
    <div className="cont">
      <div className="array-container">
        {array.map((value, indx) => (
          <div
            className="array-bar"
            key={indx}
            style={{
              backgroundColor: "purple",
              height: `${value}px`,
              width: `${width}px`,
            }}
          ></div>
        ))}
      </div>

      <ButtonControl
        changeArraySize={changeArraySize}
        resetArray={resetArray}
        insertionSort={insertionSort}
        quickSort={quickSort}
        mergeSort={mergeSort}
        heapSort={heapSort}
        bubbleSort={bubbleSort}
        size={size}
        isPlaying={isPlaying}
        isSorted={isSorted}
      />
    </div>
  );
};

export default SortingVisualisation;
