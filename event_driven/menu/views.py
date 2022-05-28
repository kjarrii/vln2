from django.shortcuts import render, get_object_or_404
from event.models import Event

# Create your views here.
def index(request):
    all_events = Event.objects.all().order_by('name')
    ordered_events = []
    most_popular = []
    ordered_selling_out = []
    selling_out = []
    for event in all_events: # Creates most popular list
        types = event.tickets_amount.split(',')
        total_tickets = 0
        for ticket_type in types: # Splits all tickets and counts the total
            tickets = ticket_type.split(':')
            total_tickets += int(tickets[1])
        if len(ordered_events) == 0:
            ordered_events.append([event, total_tickets])
        else:
            inserted = False
            for i in range(0, len(ordered_events)):
                if ordered_events[i][1] < total_tickets:
                    ordered_events.insert(i, [event, total_tickets])
                    inserted = True
                    break
            if not inserted:
                ordered_events.append([event, total_tickets])

    for event in ordered_events:
        most_popular.append(event[0])

    for event in all_events: # Creates selling out list
        types = event.tickets_amount.split(',')
        maximum_types = event.max.split(',')
        total_tickets = 0
        maximum_tickets = 0
        for ticket_type in types: # Splits all tickets and counts the total
            tickets = ticket_type.split(':')
            total_tickets += int(tickets[1])
        for ticket_type in maximum_types:
            maximum = ticket_type.split(':')
            maximum_tickets += int(maximum[1])

        difference = maximum_tickets - total_tickets
        if len(ordered_selling_out) == 0:
            ordered_selling_out.append([event, difference])
        else:
            inserted = False
            for i in range(0, len(ordered_selling_out)):
                if ordered_selling_out[i][1] > difference:
                    ordered_selling_out.insert(i, [event, difference])
                    inserted = True
                    break
                if not inserted:
                    ordered_selling_out.append([event, difference])

    for event in ordered_selling_out:
        selling_out.append(event[0])

    context = {'most_popular': most_popular, 'selling_out': selling_out, 'all_events': all_events}
    return render(request, 'menu/index.html', context)

def get_category_by_string(request, category):
    org_events = Event.objects.all().order_by('name')
    all_events = []
    for event in org_events:
        temp_list_of_keywords = event.keywords.split(',')
        if category in temp_list_of_keywords:
            all_events.append(event)
    ordered_events = []
    most_popular = []
    ordered_selling_out = []
    selling_out = []
    for event in all_events: # Creates most popular list
        types = event.tickets_amount.split(',')
        total_tickets = 0
        for ticket_type in types: # Splits all tickets and counts the total
            tickets = ticket_type.split(':')
            total_tickets += int(tickets[1])
        if len(ordered_events) == 0:
            ordered_events.append([event, total_tickets])
        else:
            inserted = False
            for i in range(0, len(ordered_events)):
                if ordered_events[i][1] < total_tickets:
                    ordered_events.insert(i, [event, total_tickets])
                    inserted = True
                    break
            if not inserted:
                ordered_events.append([event, total_tickets])

    for event in ordered_events:
        most_popular.append(event[0])

    for event in all_events: # Creates selling out list
        types = event.tickets_amount.split(',')
        maximum_types = event.max.split(',')
        total_tickets = 0
        maximum_tickets = 0
        for ticket_type in types: # Splits all tickets and counts the total
            tickets = ticket_type.split(':')
            total_tickets += int(tickets[1])
        for ticket_type in maximum_types:
            maximum = ticket_type.split(':')
            maximum_tickets += int(maximum[1])

        difference = maximum_tickets - total_tickets
        if len(ordered_selling_out) == 0:
            ordered_selling_out.append([event, difference])
        else:
            inserted = False
            for i in range(0, len(ordered_selling_out)):
                if ordered_selling_out[i][1] > difference:
                    ordered_selling_out.insert(i, [event, difference])
                    inserted = True
                    break
                if not inserted:
                    ordered_selling_out.append([event, difference])

    for event in ordered_selling_out:
        selling_out.append(event[0])

    context = {'most_popular': most_popular, 'selling_out': selling_out, 'all_events': all_events}
    return render(request, 'menu/index.html', context)
