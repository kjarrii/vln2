console.log("selecting payment")

function go_back () {
    window.location.href = 'select_delivery'
}

function verify_input(total_tickets) {
    return true
}

function delete_this_function() {
    sessionStorage.setItem('tickets', 'ZoneA:1,ZoneB:0,ZoneC:0');
    sessionStorage.setItem('name', 'Kári G');
    sessionStorage.setItem('email', 'karigeorgs@gmail.com');
    sessionStorage.setItem('phone', '+6969696996');
    sessionStorage.setItem('full_name', 'Kári Georgsson');
    sessionStorage.setItem('steet', 'Bakers');
    sessionStorage.setItem('no', '21');
    sessionStorage.setItem('city', 'London');
    sessionStorage.setItem('zip', '210');
    sessionStorage.setItem('country', 'England');
}
function go_forward (){
    delete_this_function()
    if (verify_input()) {
        console.log(sessionStorage.getItem('selected_tickets'))
        window.location.href = 'reciept'
    }
}
