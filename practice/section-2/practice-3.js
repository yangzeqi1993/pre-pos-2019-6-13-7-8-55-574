'use strict';

function countSameElements(collection) {
  let newCollection = [];
  for (let i=0; i<collection.length; i++){
    let keyValue = collection[i];
    let countValue = 1;
    if (keyValue.indexOf("-")!==-1){
      let arr = keyValue.split("-");
      keyValue = arr[0];
      countValue = parseInt(arr[1]);
    }else if(keyValue.indexOf(":")!==-1){
      let arr = keyValue.split(":");
      keyValue = arr[0];
      countValue = parseInt(arr[1]);
    }else{
      for(let j=i+1; j<collection.length; j++){
        if(collection[j].indexOf("-")!==-1) {
          let arr = collection[j].split("-");
          if(keyValue===arr[0]){
            countValue += parseInt(arr[1]);
            collection.splice(j, 1);
            j--;
          }
        }else if(collection[j].indexOf("[")!==-1){
          let arr = collection[j].split("[");
          if(keyValue===arr[0]){
            countValue += parseInt(arr[1].replace(/[^0-9]/ig, ""));
            collection.splice(j, 1);
            j--;
          }
        }else {
          if(collection[i]===collection[j]){
            collection.splice(j,1);
            j--;
            countValue++;
          }
        }
      }
    }

    newCollection.push({name:keyValue, summary:countValue});
  }
  return newCollection;
}
