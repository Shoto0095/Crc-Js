let cleanedStr = prompt("Enter a String");
cleanedStr = str.toLowerCase();
let reversedStr = cleanedStr.split('').reverse().join('');
if(cleanedStr === reversedStr)
{
    console.log("The String" + cleanedStr + "is pallindrome")
}
else
{
    console.log("The String" + cleanedStr + "is not pallindrome")
}

// console.log("Hello world"); 