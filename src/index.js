module.exports = function check(str, bracketsConfig) {

  let bracketsArry = bracketsConfig.map((elem) => elem.join(""));

  for (let i = true; i === (bracketsArry.some((elem) => str.includes(elem)));) {
    for (let i = 0; i < bracketsArry.length; i++) {
      str = str.replace(bracketsArry[i], "");
    }
  }
return str === "";
}


