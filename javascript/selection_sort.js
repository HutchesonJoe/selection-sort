function selectionSort(arr) {
  if (arr.isArray === true){
    console.log(runtime())
  }
  const sortedArr = [];
  for(let i = arr.length; i>0; i--){
  let minNum = Math.min(...arr);
  let minNumInd = arr.indexOf(minNum);
  let splicedNum = arr.splice(minNumInd, 1);
      sortedArr.push(splicedNum[0])
  }
  return sortedArr
}




if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: [-2, -.1, .5, .7, 2]");
  console.log("=>", selectionSort([-2, -.1, .5, .7, 2]));

  console.log("");

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

const startTime = Date.now();
  for (i = 0; i < 1000; i++){
    selectionSort([1,2,3]);
    selectionSort(longInput)
    }

let endTime = Date.now();
let runTime = endTime - startTime / 2000
console.log(runTime)

  }
module.exports = selectionSort;

// Sort an array in ascending numerical order. 'Repeatedly finding the minimul element in the array and putting it in the correct location in the sorted array.' Which feels like a hint, since the approach I would have taken would have been more difficult.
