// A Quicksort array to sort 15 numbers
var array = [37,30,105,305,239,90,49,205,12,15,42,47,112,36,219];

console.log("initial Array: " + array);
// the pivot is the first element of the array
function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log("Sorted Array: "+ quicksortBasic(array.slice())); 
