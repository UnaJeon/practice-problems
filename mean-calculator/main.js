function meanCalculator(numbersArray){
  var sum = 0;
  for(var i =0; i<numbersArray.length; i++){
    sum+=numbersArray[i]
  }
  return sum / numbersArray.length
}

console.log('meanCalculator([1, 2, 3, 4, 5]) ', meanCalculator([1,2,3,4,5]))
console.log('meanCalculator([7, 3, 1, 5, 3, 2])', meanCalculator([7, 3, 1, 5, 3, 2]))
console.log("meanCalculator([9, 3, 6]) ", meanCalculator([9, 3, 6]) )
