//Find the index of the element in the given array. Return the index if the element is present. Otherwise, return not found 
function getIndex(list, value){
    const index = list.indexOf(value);
    return index !== -1 ? index : "Not found";
  }