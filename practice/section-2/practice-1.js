'use strict';

function countSameElements(collection) {
  let newCollection = [];
  for (let i=0; i<collection.length; i++){
    let keyValue = collection[i];
    let countValue = 1;
    for(let j=i+1; j<collection.length; j++){
      if(collection[i]===collection[j]){
        collection.splice(j,1);
        j--;
        countValue++;
      }
    }
    newCollection.push({key:keyValue, count:countValue});
  }
  return newCollection;
}
