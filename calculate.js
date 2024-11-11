       //History fuction added code
       function calculate(operation) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        let resultText;

        switch (operation) {
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

    function clearCalculator() {
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        document.getElementById('result').innerText = '';
    }

    function storeCalculation(calculation) {
        let history = JSON.parse(localStorage.getItem('calculationHistory')) || [];
        history.push({ date: new Date().toLocaleString(), result: calculation });
        localStorage.setItem('calculationHistory', JSON.stringify(history));
    }
       
       
       
       
       
       
       //  Clear button added 
             /*function calculate(operation) 
            {
                var num1 = parseFloat(document.getElementById('num1').value);
                var num2 = parseFloat(document.getElementById('num2').value);
                var result;

                switch (operation) {
                    case 'add':
                        result = "Addition of " + num1 + " and " + num2 + " is: " + (num1 + num2);
                        break;
                    case 'subtract':
                        result = "Subtraction of " + num2 + " from " + num1 + " is: " + (num1 - num2);
                        break;
                    case 'multiply':
                        result = "Multiplication of " + num1 + " and " + num2 + " is: " + (num1 * num2);
                        break;
                    case 'divide':
                        if (num2 !== 0) {
                            result = "Division of " + num1 + " by " + num2 + " is: " + (num1 / num2);
                        } else {
                            result = "Division by zero is not allowed!";
                        }
                        break;
                    default:
                        result = "Unknown operation!";
                }

                document.getElementById('result').innerText = result;
            }

            function clearCalculator() {
                document.getElementById('num1').value = '';
                document.getElementById('num2').value = '';
                document.getElementById('result').innerText = '';
            }*/