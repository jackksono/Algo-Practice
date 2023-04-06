/*Given a roman numeral, convert it to an integer.*/

var romanToInt = function(s) {
    const romanNumeralMap = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
      };
    
      let result = 0;
    
      for (let i = 0; i < s.length; i++) {
        const currentSymbol = s[i];
        const nextSymbol = s[i + 1];
    
        if (romanNumeralMap[currentSymbol] < romanNumeralMap[nextSymbol]) {
          result -= romanNumeralMap[currentSymbol];
        } else {
          result += romanNumeralMap[currentSymbol];
        }
      }
    
      return result;
    };

 console.log(romanToInt('III'))
 console.log(romanToInt('LVIII'))