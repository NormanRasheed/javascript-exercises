const removeFromArray = function(arr, ...rmv) {
    //loop through the array
    // for (let i = 0; i < arr.length; i++){
    //   if(arr[i] === rmv) {
    //     arr.splice(rmv,1)
    //   }
    // }
    // //return the array
    // return arr;

   let arr2 = arr.filter(element => !rmv.includes(element));
    return arr2;
}

// Do not edit below this line
module.exports = removeFromArray;
