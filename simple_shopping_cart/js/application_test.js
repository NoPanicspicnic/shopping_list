document.addEventListener('DOMContentLoaded', function() {
  //define things
  var thingsList = document.getElementById('things-list');
  var thingsInput = document.getElementById('things-input');
  var addButton = document.getElementById('add-button');
  var costInput = document.getElementById('cost-input');
  var quanityInput = document.getElementById('quanity-input');
  var n = 1;

  var addTodo = function() {
    //create big div
    var storeCol = document.createElement('div');
    storeCol.setAttribute('class', 'col-xs-12 storeRow');
    // Create row div
    var storeRow = document.createElement('div');
    storeRow.setAttribute('class', 'row');
    //create remove button
    var removeButton = document.createElement('button');
    removeButton.setAttribute('class','btn btn-danger remove-button');
    removeButton.innerHTML = "REMOVE";

        //MAKE REMOVE BUTTON WORK
    removeButton.onclick = function() {
      //subtract subtotal of what is about to be removed from the grandtotal
      this.setAttribute('id', 'removeMe');
      currentGrandTotal -= $('#removeMe').prev().text();
      grandTotal.innerHTML = currentGrandTotal;
      //remove the stuff
      var child = this.parentNode.parentNode;
      thingsList.removeChild(child);
    };

    //MAKE LIST ITEMS EXIST
    //make things
    var currentThings = document.createElement('h5');
    currentThings.setAttribute('class', 'col-xs-3');
    currentThings.innerHTML = thingsInput.value;
    //make costs
    var currentCosts = document.createElement('h5');
    currentCosts.setAttribute('class', 'col-xs-3');
    currentCosts.innerHTML = costInput.value;
    //make quanity
    var currentQuanity = document.createElement('h5');
    currentQuanity.setAttribute('class', 'col-xs-3');
    currentQuanity.innerHTML = quanityInput.value;
    //make subtotal
    var subTotal = document.createElement('h4');
    subTotal.setAttribute('class', 'col-xs-3 subTotalClass');
    subTotal.innerHTML = costInput.value * quanityInput.value;
    //make grandtotal
    currentGrandTotal += costInput.value * quanityInput.value;
    var grandTotal = document.getElementById('grandTotalId');
    grandTotal.innerHTML = currentGrandTotal;

        //PUT THEM ALL IN PLACE
    storeRow.appendChild(currentThings);
    storeRow.appendChild(currentCosts);
    storeRow.appendChild(currentQuanity);
    storeRow.appendChild(subTotal);
    storeRow.appendChild(removeButton);
    storeCol.appendChild(storeRow);
    $('#things-list').prepend(storeCol);
  };



  addButton.addEventListener('click', function () {
    addTodo();
    //clear inputs when push add button
    thingsInput.value = '';
    costInput.value = '';
    quanityInput.value = '';
  });

  var checkThenAddTodo = function () {
    addTodo();
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
