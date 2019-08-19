'use strict';

function createUpdatedCollection(collectionA, objectB) {

  let collectionC = [];
  for (let i=0; i<collectionA.length; i++){
    let keyValue = collectionA[i];
    let countValue = 1;
    if(keyValue.indexOf("-")===-1){
      for(let j=i+1; j<collectionA.length; j++){
        if(collectionA[i]===collectionA[j]){
          collectionA.splice(j,1);
          j--;
          countValue++;
        }
      }
    }else {
      let arr = keyValue.split("-");
      keyValue = arr[0];
      countValue = parseInt(arr[1]);
    }
    collectionC.push({key:keyValue, count:countValue});
  }


  for (let i=0; i<collectionC.length; i++){
    for (let j=0; j<objectB.value.length; j++){
      if(collectionC[i].key===objectB.value[j]){
        // 得到 sameObjectB 对象
        let sameObjectB = collectionC.filter((p) => {
          return p.key === objectB.value[j];
        });
        sameObjectB[0].count -= Math.floor(sameObjectB[0].count/3);
      }
    }

  }
  return collectionC;

}
