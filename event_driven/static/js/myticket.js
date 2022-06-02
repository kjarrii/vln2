let myTicketsBody = document.getElementById('my-tickets-body');
let ticketBoxDiv = document.getElementById('ticket-box-div');
ticketBoxDiv.classList.add('center-div')

function getData() {
    let events = document.getElementById('events').innerText.split('&&&').slice(0,-1);
    let bookings = document.getElementById('bookings').innerText.split('&&&').slice(0,-1);
    let userBookings = [];


    // goes through the data and splits it up, then adds it to userBookings array
    for (let i=0; i<events.length; i++) {
        let eventItems = events[i].split('///');
        let bookingItems = bookings[i].split('///');
        let bookingId = bookingItems[0].split(' ').at(-1)
        let eventImage = eventItems[4].split(' ').at(-1)
        eventImage = eventImage.split(',').at(0)
        let eventId = eventItems[5].split(' ').at(-1)

        userBookings.push({'event_id': eventId, 'booking_id': bookingId, 'title': eventItems[0].trim(), 'location': eventItems[1].trim(), 'date': eventItems[2].trim(), 'prices': eventItems[3].trim(), 'tickets': bookingItems[1].trim(), 'image': eventImage});
    }

    console.log(userBookings)
    return userBookings;
}

// Returns true if the current page is the upcoming page
function pastOrPresent() {
    let upcomingBtn = document.getElementById('upcoming')
    return upcomingBtn.classList.contains('active-btn');
}

generateEvents();
function generateEvents() {
    let userBookings = getData();
    let userBookingsNum = userBookings.length

    let h3 = document.getElementById('you-have-title')
    h3.classList.add('you-have-title')

    if (pastOrPresent()) {
        h3.innerHTML="You have " + userBookingsNum + " upcoming event(s)";
    }
    else {
        h3.innerHTML="You have " + userBookingsNum + " past event(s)";
    }


    if (userBookingsNum !== 0) {
        let ticketBox = document.createElement('div') // creates the ticket box that halds all of the tickets
        ticketBox.classList.add('ticket-box')

        ticketBoxDiv.appendChild(ticketBox)

        for (let i=0; i<userBookingsNum; i++) {

            //each box for the bookings
            let eventTicketBox = document.createElement('div')
            eventTicketBox.classList.add('event-ticket-box')

            ticketBox.appendChild(eventTicketBox)



            // image for the box
            let eventTicketImg = document.createElement('div')
            eventTicketImg.classList.add('event-ticket-img')
            eventTicketImg.style.backgroundImage = "url('" + userBookings[i].image + "')"

            eventTicketBox.appendChild(eventTicketImg)
            eventTicketImg.setAttribute('onclick', 'window.location="/event/' + userBookings[i].event_id + '"')


            /// info div
            let eventTicketInfo = document.createElement('div')
            eventTicketInfo.classList.add('event-ticket-info')

            let h3 = document.createElement('h3')
            h3.classList.add('event-ticket-title')
            h3.textContent = userBookings[i].title
            eventTicketInfo.appendChild(h3)

            let h5_loc = document.createElement('h5')
            h5_loc.textContent = userBookings[i].location
            eventTicketInfo.appendChild(h5_loc)

            let h5_date = document.createElement('h5')
            h5_date.textContent = userBookings[i].date
            eventTicketInfo.appendChild(h5_date)

            let h6 = document.createElement('h6')
            h6.textContent = "Booking number: " + userBookings[i].booking_id

            let br1 = document.createElement('br'); let br2 = document.createElement('br'); let br3 = document.createElement('br')
            eventTicketInfo.appendChild(br1); eventTicketInfo.appendChild(br2); eventTicketInfo.appendChild(br3)
            eventTicketInfo.appendChild(h6)

            eventTicketBox.appendChild(eventTicketInfo)
            eventTicketInfo.setAttribute('onclick', 'window.location="/event/' + userBookings[i].event_id + '"')

            // view ticket img
            let viewTicketImgDiv = document.createElement('div')
            viewTicketImgDiv.classList.add('view-ticket-img-div')

            let viewTicketImg = document.createElement('img')
            viewTicketImg.classList.add('view-ticket-img')
            viewTicketImg.src = '/static/images/view-ticket.png'
            viewTicketImg.setAttribute('onclick', 'window.location="/"')


            viewTicketImgDiv.appendChild(viewTicketImg)

            eventTicketBox.appendChild(viewTicketImgDiv)
        }

        let br1_bottom = document.createElement('br'); let br2_bottom = document.createElement('br'); let br3_bottom = document.createElement('br')
        ticketBox.appendChild(br1_bottom); ticketBox.appendChild(br2_bottom); ticketBox.appendChild(br3_bottom)
        
    }
}
