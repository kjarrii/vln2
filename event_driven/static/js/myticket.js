let myTicketsBody = document.getElementById('my-tickets-body');
let ticketBoxDiv = document.getElementById('ticket-box-div');
ticketBoxDiv.classList.add('center-div');

function getData() {
    let events = document.getElementById('events').innerText.split('&&&').slice(0,-1);
    let bookings = document.getElementById('bookings').innerText.split('&&&').slice(0,-1);
    let userBookings = [];



    // goes through the data and splits it up, then adds it to userBookings array
    for (let i=0; i<events.length; i++) {
        let eventItems = events[i].split('///');
        let bookingItems = bookings[i].split('///');
        let bookingId = bookingItems[0].split(' ').at(-1);
        let eventImage = eventItems[4].split(' ').at(-1);
        eventImage = eventImage.split(',').at(0);

        userBookings.push({'event_id': eventItems[5].trim(), 'booking_id': bookingId, 'title': eventItems[0].trim(), 'location': eventItems[1].trim(), 'date': eventItems[2].trim(), 'date_end': eventItems[6].trim(), 'prices': eventItems[3].trim(), 'tickets': bookingItems[1].trim(), 'image': eventImage});
    }

    return userBookings;
}

// Returns true if the current page is the upcoming page
function pastOrPresent() {
    let upcomingBtn = document.getElementById('upcoming');
    return upcomingBtn.classList.contains('active-btn');
}

generateEvents();
function generateEvents() {
    let userBookings = getData();
    let userBookingsNum = userBookings.length;

    let h3 = document.getElementById('you-have-title');
    h3.classList.add('you-have-title');

    if (pastOrPresent()) {
        h3.innerHTML="You have " + userBookingsNum + " upcoming event(s)";
    }
    else {
        h3.innerHTML="You have " + userBookingsNum + " past event(s)";
    }


    if (userBookingsNum !== 0) {
        let ticketBox = document.createElement('div'); // creates the ticket box that halds all of the tickets
        ticketBox.classList.add('ticket-box');

        ticketBoxDiv.appendChild(ticketBox);

        for (let i=0; i<userBookingsNum; i++) {

            //each box for the bookings
            let eventTicketBox = document.createElement('div');
            eventTicketBox.classList.add('event-ticket-box');

            ticketBox.appendChild(eventTicketBox);

            // image for the box
            let eventTicketImg = document.createElement('div');
            eventTicketImg.classList.add('event-ticket-img');
            eventTicketImg.style.backgroundImage = "url('" + userBookings[i].image + "')";

            eventTicketBox.appendChild(eventTicketImg);
            eventTicketImg.setAttribute('onclick', 'window.location="/event/' + userBookings[i].event_id + '"');


            /// info div
            let eventTicketInfo = document.createElement('div');
            eventTicketInfo.classList.add('event-ticket-info');

            let h3 = document.createElement('h3');
            h3.classList.add('event-ticket-title');
            h3.textContent = userBookings[i].title;
            eventTicketInfo.appendChild(h3);

            let h5_loc = document.createElement('h5');
            h5_loc.textContent = userBookings[i].location;
            eventTicketInfo.appendChild(h5_loc);

            let h5_date = document.createElement('h5');
            h5_date.textContent = userBookings[i].date;
            eventTicketInfo.appendChild(h5_date);

            let h6 = document.createElement('h6');
            h6.textContent = "Booking number: " + userBookings[i].booking_id;

            let br1 = document.createElement('br'); let br2 = document.createElement('br'); let br3 = document.createElement('br');
            eventTicketInfo.appendChild(br1); eventTicketInfo.appendChild(br2); eventTicketInfo.appendChild(br3);
            eventTicketInfo.appendChild(h6);

            eventTicketBox.appendChild(eventTicketInfo);
            eventTicketInfo.setAttribute('onclick', 'window.location="/event/' + userBookings[i].event_id + '"');

            // view ticket img
            let viewTicketImgDiv = document.createElement('div');
            viewTicketImgDiv.classList.add('view-ticket-img-div');

            let viewTicketImg = document.createElement('img');
            viewTicketImg.classList.add('view-ticket-img');
            viewTicketImg.src = '/static/images/view-ticket.png';

            viewTicketImg.addEventListener('click', function() {
                generatePopUp(userBookings[i])
            })


            viewTicketImgDiv.appendChild(viewTicketImg);

            eventTicketBox.appendChild(viewTicketImgDiv);
        }



    }
}


let popUpTop = document.getElementById('pop-up-top');
let popupContentBox = document.getElementById('popup-content-box');
let popUpWindow = document.getElementById('pop-up-window');

function generatePopUp(userBooking) {

    myTicketsBody.classList.add('pop-up-active');
    popUpWindow.classList.add('pop-up-window-active');
    
    let title = document.createElement('h2');
    title.textContent = userBooking.title;
    popUpTop.appendChild(title);
    
    let location = document.createElement('h5');
    location.textContent = userBooking.location;
    popUpTop.appendChild(location);
    
    let date = document.createElement('h5');
    date.textContent = userBooking.date;
    popUpTop.appendChild(date);
    
    let line = document.createElement('div');
    line.classList.add('center-div');
    let hr = document.createElement('hr');
    line.appendChild(hr);
    popUpTop.appendChild(line);

    let ticketsTypes = userBooking.tickets.split(',');
    let ticketsPrice = userBooking.prices.split(',');
    let total_sum = 0

    for (let i=0; i<ticketsTypes.length; i++) {
        let ticket_type = ticketsTypes[i].split(':'); /* index 0 is type, index 1 is amount */

        let ticket_amount = ticket_type.at(1); /* amount */
        if (ticket_amount !== '' && ticket_amount !== '0') {
            console.log(ticket_amount)
            console.log(typeof ticket_amount)

            ticket_type = ticket_type.at(0);       /* types */

            let ticket_price = ticketsPrice[i].split(':').at(1); /* prices */

            let total = ticket_price*ticket_amount; /* total */
            total_sum += total;

            let type_div = document.createElement('div');
            type_div.classList.add('grid-item');
            type_div.textContent = ticket_type;
            popupContentBox.appendChild(type_div);

            let price_div = document.createElement('div');
            price_div.classList.add('grid-item');
            price_div.textContent = ticket_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK";
            popupContentBox.appendChild(price_div);

            let amount_div = document.createElement('div');
            amount_div.classList.add('grid-item'); amount_div.classList.add('amount');
            amount_div.textContent = ticket_amount.toString();
            popupContentBox.appendChild(amount_div);

            let total_div = document.createElement('div');
            total_div.classList.add('grid-item'); total_div.classList.add('total-margin');
            total_div.textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK"
            popupContentBox.appendChild(total_div);
        }
    }

    let filler1 = document.createElement('div'); let filler2 = document.createElement('div'); let filler3 = document.createElement('div')
    filler1.classList.add('grid-item'); filler2.classList.add('grid-item'); filler3.classList.add('grid-item');
    popupContentBox.appendChild(filler1); popupContentBox.appendChild(filler2); popupContentBox.appendChild(filler3);

    let sum = document.createElement('div');
    sum.classList.add('grid-item'); sum.classList.add('sum')
    sum.textContent = total_sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ISK"
    popupContentBox.appendChild(sum);

    setTimeout(() => {
        document.addEventListener('click', function (event) {
            removePopUp(event)
        }, { once: true })
    }, 100)
}



function removePopUp(event) {
    if (popUpWindow.classList.contains('pop-up-window-active') && event.target) {

        popUpWindow.classList.remove('pop-up-window-active')
        myTicketsBody.classList.remove('pop-up-active')

        popUpTop.replaceChildren()
        popupContentBox.replaceChildren()
    }
}