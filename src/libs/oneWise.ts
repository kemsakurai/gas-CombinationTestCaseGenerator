'use strict';

export const oneWise= (arr, randomFn?) : any => {
    let fn = randomFn || Math.random;
    let interactions = []; // matrix
    let greatest = 1;
    let len = 0;
    let elems = null; // parameter
    let row = null;
    for (let i = 0; i < greatest; ++i) {
      row = [];
      for (let j in arr) {
        elems = arr[j];
        len = elems.length;
        if (len > greatest) {
          greatest = len;
        }
        if (i < len) {
          row[j] = elems[i];
        } else if (len > 0) {
          row[j] = elems[randomBefore(len, fn)];
        }
      }
      interactions.push(row);
    }
    return interactions;
}

function randomBefore(n, randomFn) {
    return Math.floor(randomFn() * n);
}
