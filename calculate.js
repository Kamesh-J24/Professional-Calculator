       function calculate(operation) 
       {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let resultText;

        switch (operation) 
        {
            case 'add':
                resultText = `Addition of ${num1} and ${num2} is: ${num1 + num2}`;
                break;
            case 'subtract':
                resultText = `Subtraction of ${num2} from ${num1} is: ${num1 - num2}`;
                break;
            case 'multiply':
                resultText = `Multiplication of ${num1} and ${num2} is: ${num1 * num2}`;
                break;
            case 'divide':
                resultText = num2 !== 0 ? `Division of ${num1} by ${num2} is: ${num1 / num2}` : "Division by zero is not allowed!";
                break;
            default:
                resultText = "Unknown operation!";
        }

        document.getElementById('result').innerText = resultText;
        storeCalculation(resultText);
    }

    function clearCalculator() 
    {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('result').innerText = '';
    }

    function storeCalculation(calculation) 
    {
        let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
        history.push({ date: new Date().toLocaleString(), result: calculation });
        localStorage.setItem('calculationHistory', JSON.stringify(history));
    }