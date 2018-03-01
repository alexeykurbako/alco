function getOperator(oper, ch2) {
  switch (oper) {
    case 0:
      if (ch2 < 0) {
        return "";
      }
      return "+";
      break;
    case 1:
      if (ch2 < 0) {
        return "+";
      }
      return "-";
      break;
    case 2:
      return "*";
      break;
    case 3:
      return "/";
      break;
  }
}

function checkNumber(ch2, oper) {
  if (oper == 0 && ch2 < 0) {
    return ch2;
  }
  if (oper == 1 && ch2 < 0) {
    return -ch2;
  }
  if ((oper == 2 || oper == 3) && ch2 < 0) {
    return `(${ch2})`;
  }
  return ch2;
}

function randomOperator() {
  return Math.floor(Math.random() * 4);
}

function getResult(ch1, ch2, oper) {
  switch (oper) {
    case 0: 
      return rez = ch1 + ch2; 
      break;
    case 1:
      return rez = ch1 - ch2; 
      break;
    case 2: 
      return rez = ch1 * ch2;
      break;
    case 3:
      return rez = Math.floor((ch1 / ch2) * 10) / 10; break;
  }
}

function getrandom() {
  const min = -10;
  const max = 10;
  const result = Math.floor(Math.random() * (max - min)) + min;
  if (result == 0) {
    return max;
  }
  return result;
}

while (true) {
  const ch1 = getrandom();
  const ch2 = getrandom();
  const oper = randomOperator();
  const result = getResult(ch1, ch2, oper);
  const answer = prompt(`${ch1} ${getOperator(oper, ch2)} ${checkNumber(ch2, oper)} = ?`);
  if (+answer == result) {
    alert('ещё по одной...');
  } else {
    alert('Хватит с тебя');
    break;
  }
}

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  