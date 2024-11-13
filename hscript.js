function loadHistory() 
        {
              const historyContainer = document.getElementById('history');
              const history = JSON.parse(localStorage.getItem('calculationHistory')) || [];

              if (history.length === 0) 
                {
                 historyContainer.innerHTML = "<p>No calculation history available.</p>";
                 return;
                 }

              historyContainer.innerHTML = '';
              history.forEach(entry => 
                {
                 const listItem = document.createElement('li');
                 listItem.textContent = entry.result;  
                 historyContainer.appendChild(listItem);
                });
        }

          function clearHistory() 
          {
             localStorage.removeItem('calculationHistory');
             loadHistory();  
          }