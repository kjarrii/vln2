let currentPage = 1;
let body = document.getElementById('booking-body');

function clearDiv() {
    body.innerHTML = "";
}

function nextPage() {
    currentPage += 1;
}

function prevPage() {
    currentPage -= 1;
}

function loadPage() {
    if (currentPage === 1) {
        fetch('../../templates/booking/select_tickets.html')
        .then(response=> response.text())
        .then(text=> body.innerHTML = text);
    }
    else if (currentPage === 2) {

    }
    else if (currentPage === 3) {

    }
    else if (currentPage === 4) {

    }
    else if (currentPage === 5) {

    }
}