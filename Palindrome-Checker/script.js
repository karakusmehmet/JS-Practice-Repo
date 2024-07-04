const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById('result');
'hello'.tol


button.addEventListener('click',()=>{
    const inputValue = input.value;
    if(!inputValue)
        alert("Please input a value");
    else{
        checkPalindrome(inputValue);
        input.value = "";
    }
})

const regexControlBasic = inputValue =>{
    const regex = /[\W_]/g;
    const originalInput = inputValue.toLowerCase().replace(regex,'');
    return originalInput;
}

const regexControl = inputValue =>{
    const regex = /[\W_]/g;
    const reverseInputValue = inputValue.toLowerCase().replace(regex,'').split('').reverse().join('');
    return reverseInputValue;
}

 const checkPalindrome = inputValue =>{
     const reversedInputValue = regexControl(inputValue);
     const originalInput = regexControlBasic(inputValue);
     console.log(reversedInputValue,originalInput);
    
     if(originalInput === reversedInputValue){
         result.style.display = "block";
         result.innerText = `${inputValue} is a palindrome`;
     }
     else{
         result.style.display = "block";
         result.innerText = `${inputValue} is not a palindrome`;
     }
    }