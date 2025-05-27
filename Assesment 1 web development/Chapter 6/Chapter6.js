// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Get elements by their IDs
  const costInput = document.getElementById('cost');
  const litersInput = document.getElementById('liters');
  const calculateButton = document.getElementById('calculateBtn');
  const totalCostDisplay = document.getElementById('totalCost');
  
  
  

  // Event listener for the button click
  calculateButton.addEventListener('click', function () {
    // Get the values of the input fields
    const costPerLiter = parseFloat(costInput.value);
    const litersPurchased = parseFloat(litersInput.value);

    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;
	
	

    // Display the total cost in the <p> tag, formatted to two decimal places
    totalCostDisplay.textContent = `Total Cost: £${totalCost.toFixed(2)}`;
  });
});
