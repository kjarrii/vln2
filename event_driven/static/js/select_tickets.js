submit_button = document.getElementById('submit-button')
tickets = document.getElementById('amount_of_tickets')
console.log("submit stuff")

submit_button.addEventListener("click", function () {

    window.location.href = 'ticket_holders/' + tickets.value
});