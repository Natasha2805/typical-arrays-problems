
exports.min = function min (array) {
  if(Array.isArray(array) == false || array.length == 0) {return 0};
  return  Math.min(...array);

}

exports.max = function max (array) {
    if(Array.isArray(array) == false || array.length == 0) {return 0};
    return  Math.max(...array);
}

exports.avg = function avg (array) {
    if(Array.isArray(array) == false || array.length == 0) {return 0};
        let average = 0;
    if (array.length > 0)
    {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
             sum += array[i];
        }
        average = sum / array.length;
    }
    return average
   
}
