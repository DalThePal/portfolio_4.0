export const hexTofeColorMatrix = (hex) => {
  let strippedHex = hex.replace('#', '')
  let RGB = [];
  let numberList = [0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0];

  for (let i = 0; i < strippedHex.length; i+=2) { 
    const firstDigit = parseInt(strippedHex[i], 16);
  
    const firstDigitPartial = firstDigit * 16;
  
    let RGBValue = parseInt(strippedHex[i+1], 16) + firstDigitPartial;
    
    RGBValue = RGBValue / 255;
    
    RGBValue = RGBValue.toFixed(2);
    
    RGB.push(RGBValue);
  }
  
  const red = RGB[0];
  const green = RGB[1];
  const blue = RGB[2];

  numberList[4] = red;
  numberList[9] = green;
  numberList[14] = blue; 
  
  return numberList.join(' ').toString()
};
