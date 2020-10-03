module.exports = function toReadable(number) {
    const up_to_19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    const tens = [
        "zero_ten",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];
    const space = " ";

    

if (number < 20) return up_to_19[number];

if (number < 100)
    return (
        tens[parseInt(number/10)] + (number % 10 == 0 ? "" : " " ) + (number % 10 == 0 ? '' : up_to_19[number % 10])
        );
    

    
if (number > 99 && number % 100 === 0) return (up_to_19[number/100] + " hundred");

if (number > 99 && number % 10 === 0) return (up_to_19[parseInt(number/100)] +" hundred " +tens[(number % 100)/10]);

else
   if (number % 100 < 10)
       return(
       up_to_19[parseInt(number/100)] +" hundred " +up_to_19[number % 10]
       );
       
    else if (number % 100 > 10 && number % 100 < 20 && number % 100 !== 10)
        return (
        up_to_19[parseInt(number/100)] +" hundred " +up_to_19[(number % 10) + 10]
        );
       
    else
    return (
        up_to_19[parseInt(number/100)] +" hundred " +tens[parseInt((number % 100)/10)] + " " + up_to_19[number % 10]
        );


    
    
}
