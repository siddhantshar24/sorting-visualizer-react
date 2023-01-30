import React from "react";

export default function ButtonControl({
  changeArraySize,
  resetArray,
  insertionSort,
  quickSort,
  mergeSort,
  heapSort,
  bubbleSort,
  size,
  isPlaying,
  isSorted,
}) {
  return (
    <div className="button-container">
      <div>
        <a href="/" className="btn stop me-2">
          Stop (Refresh)
        </a>
      </div>
      <button
        className={`btn m-2 ${isSorted ? "btn-sec" : "btn-danger"}`}
        onClick={resetArray}
        disabled={isPlaying || (!isSorted && !isPlaying)}
      >
        Reset to Same Array
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-dark"
        }`}
        onClick={insertionSort}
        disabled={isPlaying || isSorted}
      >
        Insertion Sort
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-success"
        }`}
        onClick={quickSort}
        disabled={isPlaying || isSorted}
      >
        Quick Sort
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-warning"
        }`}
        onClick={mergeSort}
        disabled={isPlaying || isSorted}
      >
        Merge Sort
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-primary"
        }`}
        onClick={heapSort}
        disabled={isPlaying || isSorted}
      >
        Heap Sort
      </button>
      <button
        className={`btn m-2 ${
          isPlaying || isSorted ? "btn-danger" : "btn-info"
        }`}
        onClick={bubbleSort}
        disabled={isPlaying || isSorted}
      >
        Bubble Sort
      </button>
      <div className="ms-4">
        <label for="shade" className="form-label mt-2">
          Size {size}
        </label>
        <input
          type="range"
          id="shade"
          name="shade"
          min="10"
          max="500"
          className="form-range ms-3"
          onChange={changeArraySize}
          disabled={isPlaying}
        />
      </div>
    </div>
  );
}
