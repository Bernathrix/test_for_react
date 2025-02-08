let test = document.getElementById("display");

function test_on_skobk(value){
  let opened_skobk = 0
  for (let i=0;i<value.length;i++){
    if (value[i] == "("){
      opened_skobk++;
    } else if (value[i] == ")") {
      opened_skobk -= 1;
    }
  }
  if (opened_skobk < 1){
    return false;
  } else {
    return true;
  }
}

function count(str, pods){
  let answer = 0;
  for (let i=0;i<str.length;i++){
    if (str[i] == pods){
      answer++;
    }
  }
  return answer;
}

function calculate(val){
  if (count(val, "(") == count(val, ")")){
    val = val.replaceAll("^", "**");
    val = val.replaceAll("x", "*");
    return Math.round((eval(val) + Number.EPSILON) * 100000) / 100000;
  } else {
    return "NaN";
  }
}

function on_click_digit(num){
  if (num == "clear"){
    test.value = "";
    return;
  }
  let val = test.value;
  switch (num){

    case "+":
      if (val.length == 0) {
        return
      }if (val.slice(-1) == "+"){
        return
      } else if (val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "/" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
        test.value = test.value.slice(0, -1) + "+";
      }
      else{
        test.value += "+";
    }
      break;

    case "-":
      if (val.length == 0) {
        return
      }if (val.slice(-1) == "-"){
      return
    } else if (val.slice(-1) == "+" || val.slice(-1) == "x" || val.slice(-1) == "/" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
      test.value = test.value.slice(0, -1) + "-";
    }
    else{
      test.value += "-";
    }
      break;

    case "x":
      if (val.length == 0) {
        return
      }if (val.slice(-1) == "x"){
      return
    } else if (val.slice(-1) == "-" || val.slice(-1) == "+" || val.slice(-1) == "/" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
      test.value = test.value.slice(0, -1) + "x";
    }
    else{
      test.value += "x";
    }
      break;

    case "/":
      if (val.length == 0) {
        return
      }if (val.slice(-1) == "/"){
      return
    } else if (val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
      test.value = test.value.slice(0, -1) + "/";
    }
    else{
      test.value += "/";
    }
      break;

    case "^":
      if (val.length == 0) {
        return
      }if (val.slice(-1) == "^"){
      return
    } else if (val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "/" || val.slice(-1) == ".") {
      test.value = test.value.slice(0, -1) + "^";
    }
    else{
      test.value += "^";
    }
      break;


    case ".":
      if (val.length == 0) {
        return;
      }else if (val.slice(-1) == "/" || val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
        return;
      }else{
          test.value += ".";}
      break;

    case "(":
      if (test.value.length == 0) {
        test.value += "(";
      } else if (val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == "/" || val.slice(-1) == ".") {
        test.value += "(";
    } else {
        return;
    }

    case ")":
      if (val.length == 0) {
        return;
      }else if (val.slice(-1) == "/" || val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "^" || val.slice(-1) == ".") {
      return;
    }else{
       if (test_on_skobk(val) == true){
         test.value += ")"
       } else {
          return;
       }
      }
    break;

    case "0":
      if (val.length == 0) {
        return;
      } else {
        test.value += "0";
      }
    break;

    case "calculate":
      if (val.length == 0) {
        return;
      }else if (val.slice(-1) == "/" || val.slice(-1) == "-" || val.slice(-1) == "x" || val.slice(-1) == "+" || val.slice(-1) == "(" || val.slice(-1) == "^") {
        return;
      }else{
    test.value = calculate(val)}
      break;

    default:
      if (val.length != 0 && val.slice(-1) == "0"){
        test.value = test.value.slice(0, -1) + num;
      } else {
      test.value += num;}
      break;
  }
}

