from django.shortcuts import render, get_object_or_404
from event.models import Event

# Create your views here.
def index(request):
    all_events = Event.objects.all().order_by('id')
    ordered_events = []
    return_events = []
    for event in all_events: # Finds all events
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
        return_events.append(event[0])
    context = {'events': return_events}
    return render(request, 'menu/index.html', context)


def get_category_by_string(request, category):
    all_events = Event.objects.all().order_by('id')
    return_events = []
    for event in all_events:
        temp_list_of_keywords = event.keywords.split(',')
        if category in temp_list_of_keywords:
            return_events.append(event)
    context = {'events': return_events}
    return render(request, 'menu/index.html', context)