function handleSubmit(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    
    const res = num1 + num2;

    // Log the values to the console for debugging
    console.log("Num1:", num1);
    console.log("Num2:", num2);
    
    // Display the result
    document.getElementById('res').innerHTML = res;
};
