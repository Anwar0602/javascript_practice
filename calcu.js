
function myCalculator(price,taxAmountDigit)
{
    var myPrice = price;
    var taxAmount = taxAmountDigit;
    var devidePrice = myPrice / 100;
    var totalTax = devidePrice * taxAmountDigit; 
    var actualPrice = myPrice + totalTax;
    return actualPrice;
}

document.write("The Total Price is: " + myCalculator(12242,2.5) + " Taka");
document.write("<br/>");
document.write("<br/>");

document.write("The Total Price is: " + myCalculator(1222,5.6) + " Taka");

