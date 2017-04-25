function isVowel(x){

  if (x == 'a' | x == 'A') {
    return true;
  } else if (x == 'e' | x == 'E') {
    return true;
  } else if (x == 'i' | x == 'I') {
    return true;
  } else if (x == 'o' | x == 'O') {
    return true;
  } else if (x == 'u' | x == 'U') {
    return true;
  } else {
    return false;
  }

  return isValid;

}

console.log(isVowel('U'));
