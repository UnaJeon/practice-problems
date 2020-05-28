function phAnalyzer(ph){
  if(ph>=0&&ph<7){
    return "acidic"
  }else if(ph ===7){
    return "neutral"
  }else if(ph>7&&ph<=14){
    return "alkaline"
  }else{
    return "invalid pH value"
  }
}
console.log(phAnalyzer(7));
console.log(phAnalyzer(4));
console.log(phAnalyzer(12));
console.log(phAnalyzer(25))
