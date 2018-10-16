function takeANumber(line, name){
  var length = line.length;
  var lengthAsString = length.toString();
  var finalDigit = lengthAsString.charAt(length - 1)
  var secondToLastDigit = lengthAsString.charAt(length - 2)
  var suffix;
  if(finalDigit == "1" && secondToLastDigit != "1"){
    suffix = "st"
  }else if(finalDigit == "2" && secondToLastDigit != "1"){
    suffix = "nd"
  }else if(finalDigit == "3" && secondToLastDigit != "1"){
    suffix = "rd"
  }else{
    suffix = "th"
  }
  return "Welcome " + name + ". You are " + length + suffix + " in line.";
}

function nowServing(katzDeliLine){
  //var length = katzDeliLine.length
  if(length === katzDeliLine.length){
    return "There is nobody waiting to be served!";
  }else{
    return katzDeliLine.shift()
  }
}

function currentLine(line){
  var length = line.length
  if(length === 0){
    return "The line is currently empty."
  }else{
    var string = "The line is currently: "
    for(var i = 0; i < length; i++){
      string += `${i}. `;
      string += line[i];
    }
    return string
  }
}