'use strict';

function createUpdatedCollection(collectionA, objectB) {
  for (let i=0; i<collectionA.length; i++){
    for (let j=0; j<objectB.value.length; j++){
      if(collectionA[i].key===objectB.value[j]){
        // 得到 sameObjectB 对象
        let sameObjectB = collectionA.filter((p) => {
          return p.key === objectB.value[j];
        });
        sameObjectB[0].count--;
      }
    }

  }
  return collectionA;
}
