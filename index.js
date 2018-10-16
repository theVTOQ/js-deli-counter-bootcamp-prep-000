function takeANumber(line, name){
  var length = line.length;
  var lengthAsString = length.toString();
  var finalDigit = 
  var suffix;
  if(length == 1 ){
    suffix = "st"
  }else if(length == 2){
    suffix = "nd"
  }else if(length == 3){
    suffix = "rd"
  }else{
    suffix = "th"
  }
  return "Welcome " + name + ". You are " + length + suffix + " in line.";
}

function nowServing()