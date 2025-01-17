const extendHex = (shortHex) => {
  // write your code here
	let hexCode = "#";
  for (let i = 0; i < shortHex.length; i++) { 
    console.log(shortHex[i]);
    if (shortHex[i] != "#") {
        hexCode += shortHex[i]+shortHex[i];
    }
  }
	return hexCode;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex)); 
