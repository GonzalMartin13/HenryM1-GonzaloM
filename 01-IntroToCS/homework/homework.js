'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   let array = num.split("");
   let arrayInvertido = array.reverse();

   for (let i = 0; i < num.length; i++){
      decimal = decimal + arrayInvertido[i] * 2 ** i;
   }
   return decimal;
}
function DecimalABinario(num) {
   let binario = num.toString(2);
   return binario
}


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
