document.addEventListener('DOMContentLoaded', function() {
  // Code placed here will run when the DOM content has loaded.
  var thingsList = document.getElementById('things-list');
  var thingsInput = document.getElementById('things-input');
  var addButton = document.getElementById('add-button');
  var costInput = document.getElementById('cost-input');
  var quanityInput = document.getElementById('quanity-input');
  var n = 1;

  var addTodo = function() {
    // Create a div element and assign it to storeCol variable.
    var storeCol = document.createElement('div');
    // Give it a class of col-xs-12 and todo.
    storeCol.setAttribute('class', 'col-xs-12 storeRow');
    // Create another div element and assign it to storeRow variable.
    var storeRow = document.createElement('div');
    // Give it a class of row.
    storeRow.setAttribute('class', 'row');
    // Create a button element and assign it to removeButton variable.
    var removeButton = document.createElement('button');
    // Set class attribute of removeButton as btn, btn-danger and remove-button.
    removeButton.setAttribute('class','btn btn-danger remove-button');
    // Add the string "REMOVE" into the innerHTML of removeButton.
    removeButton.innerHTML = "REMOVE";
    // Define the event listener for click so that this storeCol element
    // will be removed when the user clicks removeButton

        //MAKE REMOVE BUTTON WORK
    removeButton.onclick = function() {
      var removeCost = $('h4').text();

      currentGrandTotal -= removeCost;
      grandTotal.innerHTML = currentGrandTotal;
      // We use 'this' to point to the remove button element.
      // this.parentNode.parentNode will assign storeCol to variable child
      var child = this.parentNode.parentNode;
      // We use the removeChild method to delete child from the todo-list
      thingsList.removeChild(child);
    };

        //MAKE LIST ITEMS EXIST
    // Create an h5 element and assign it to the h5 variable.
    var currentThings = document.createElement('h5');
    // Sets the class attribute of h5 to take up 8 columns.
    currentThings.setAttribute('class', 'col-xs-3');
    // Assign the value of thingsInput, which is the text the user typed
    // into the input element, to the innerHTML property of h5.
    currentThings.innerHTML = thingsInput.value;

    // Create an h5 element and assign it to the h5 variable.
    var currentCosts = document.createElement('h5');
    // Sets the class attribute of h5 to take up 8 columns.
    currentCosts.setAttribute('class', 'col-xs-3');
    // Assign the value of thingsInput, which is the text the user typed
    // into the input element, to the innerHTML property of h5.
    currentCosts.innerHTML = costInput.value;

    // Create an h5 element and assign it to the h5 variable.
    var currentQuanity = document.createElement('h5');
    // Sets the class attribute of h5 to take up 8 columns.
    currentQuanity.setAttribute('class', 'col-xs-3');
    // Assign the value of thingsInput, which is the text the user typed
    // into the input element, to the innerHTML property of h5.
    currentQuanity.innerHTML = quanityInput.value;

    var subTotal = document.createElement('h4');
    subTotal.setAttribute('class', 'col-xs-3 subTotalClass');
    subTotal.innerHTML = costInput.value * quanityInput.value;


    currentGrandTotal += costInput.value * quanityInput.value;
    var grandTotal = document.getElementById('grandTotalId');
    grandTotal.innerHTML = currentGrandTotal;

        //PUT THEM ALL IN PLACE
    // Add h5 as the last child element to the storeRow element.
    storeRow.appendChild(currentThings);
    storeRow.appendChild(currentCosts);
    storeRow.appendChild(currentQuanity);
    storeRow.appendChild(subTotal);
    // Add removeButton as the last child element to storeRow.
    storeRow.appendChild(removeButton);
    // Add storeRow as the last child element to the storeCol element.
    storeCol.appendChild(storeRow);
    // Append storeCol as the last child element to the thingsList div.
    $('#things-list').prepend(storeCol);
  };



  // This handler will execute when the addButton is clicked.
  addButton.addEventListener('click', function () {
    // Executes the addTodo function we defined earlier.
    addTodo();
    // Clear the input element by setting it to empty string.
    thingsInput.value = '';
    costInput.value = '';
    quanityInput.value = '';
  });

  var checkThenAddTodo = function () {
    // Executes the addTask function we defined earlier.
    addTodo();
    // Clear the input element by setting it to empty string.
    thingsInput.value = '';
    costInput.value = '';
    quanityInput.value = '';
  }
  addButton.addEventListener('keyup', checkThenAddTodo);
  thingsInput.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
      checkThenAddTodo();
    }
  });
});
  var currentGrandTotal = 0;
