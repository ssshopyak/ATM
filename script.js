function Bancomatik (inputAmount) {
    var kupyri = [];
    var balance = 3000;
   
     if(inputAmount !== 0 && inputAmount % 100 == 0 && inputAmount <= balance) {
        var kup500 = Math.trunc(inputAmount / 500);
        var kup200 = Math.trunc((inputAmount - (kup500 * 500)) / 200 );
        var kup100 = Math.trunc((inputAmount - ((kup500 * 500) + (kup200 * 200))) / 100);
   
        kupyri.push(kup500);
        kupyri.push(kup200);
        kupyri.push(kup100);
   
        console.log("Vash teperishniy balanc = ", balance - inputAmount);
        console.log(kupyri);
     }
     else if (inputAmount > balance) {
      console.log("Malo Babok");
     }
     else if ( inputAmount % 100 != 0 || inputAmount < 100 ) {
      console.log( "nevirna suma");
   }
   }
   
   Bancomatik(prompt('Suma na vuvid'));
