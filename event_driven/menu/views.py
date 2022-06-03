from django.shortcuts import render, get_object_or_404
from event.models import Event
import datetime
import pytz

# Create your views here.
def index(request):
    org_events = Event.objects.all().order_by('name')
    all_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in org_events:
        start_date = event.start
        if start_date > curr_date:
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
        elif event.tickets_left() == 0:
            continue
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
        elif event.tickets_left() == 0:
            continue
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

    context = {'most_popular': most_popular, 'selling_out': selling_out, 'all_events': False, 'browse': True}
    return render(request, 'menu/index.html', context)

def get_category_by_string(request, category):
    # Parturinn sem sér um keywords
    key = category.lower()
    keys = key.split(' ')
    org_events = Event.objects.all().order_by('name')
    keyword_events = []
    for event in org_events:
        temp_list_of_keywords = event.keywords.split(',')
        for word in keys:
            if word in temp_list_of_keywords:
                keyword_events.append(event)
    ##################################
    all_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in keyword_events:
        start_date = event.start
        if start_date > curr_date:
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
        elif event.tickets_left() == 0:
            continue
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
        elif event.tickets_left() == 0:
            continue
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
    if len(all_events) == 0:
        most_popular = False
        selling_out = False
        all_events = False
    if category == "concert":
        category = "Concerts"
    context = {'most_popular': most_popular, 'selling_out': selling_out, 'all_events': all_events, 'category': category.capitalize()}
    return render(request, 'menu/index.html', context)

def get_all_events(request):
    org_events = Event.objects.all().order_by('name')
    all_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in org_events:
        start_date = event.start
        if start_date > curr_date:
            all_events.append(event)
    context = {'most_popular': False, 'selling_out': False, 'all_events': all_events}
    return render(request, 'menu/index.html', context)

def only_future(all_events):
    return_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in all_events:
        start_date = event.start
        if start_date > curr_date:
            return_events.append(event)
    return return_events

def contains_keyword(query, events):
    search_list = query.split(' ')
    return_list = []
    for event in events:
        keywords_string = event.keywords
        keywords = keywords_string.split(',')
        for word in keywords:
            for search in search_list:
                if search in word:
                    if event not in return_list:
                        return_list.append(event)
    return return_list

def sort_by_category(category, events):
    return_list = []
    for event in events:
        keywords_string = event.keywords
        keywords = keywords_string.split(',')
        for word in keywords:
            if word.lower() == category.lower():
                if event not in return_list:
                    return_list.append(event)
    return return_list

def sort_by_furthest(events):
    return_list = []
    for event in events:
        if len(return_list) == 0:
            return_list.append(event)
        else:
            for i in range(0, len(return_list)):
                if return_list[i].start < event.start:
                    return_list.insert(i, event)
                    break
            if event not in return_list:
                return_list.append(event)
    return return_list

def sort_by_most_popular(events):
    ordered_events = []
    most_popular = []
    for event in events: # Creates most popular list
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
    return most_popular

def search_query(request, search_str):
    x = search_str.strip().lower()
    arguments = x.split('=')
    x = arguments[0]
    category = arguments[1]
    method = arguments[2]
    org_events = Event.objects.all().order_by('name')
    future_events = only_future(org_events)
    keyword_list = contains_keyword(x, future_events)
    if category != 'any':
        category_list = sort_by_category(category, keyword_list)
    else:
        category_list = keyword_list
    if method != 'any':
        if method == 'most_popular':
            method_list = sort_by_most_popular(category_list)
        elif method == 'least_popular':
            temp = sort_by_most_popular(category_list)
            temp.reverse()
            method_list = temp
        elif method == 'closest':
            temp = sort_by_furthest(category_list)
            temp.reverse()
            method_list = temp
        elif method == 'furthest':
            method_list = sort_by_furthest(category_list)
        elif method == 'a-z':
            method_list = category_list
        elif method == 'z-a':
            category_list.reverse()
            method_list = category_list
        else:
            method_list = category_list
    else:
        method_list = category_list
    number_of_events = len(method_list)
    if category == "any":
        category = False
    else:
        category = category.capitalize()
    if method == "any":
        method = False
    elif method == "most_popular":
        method = "Most popular"
    elif method == "least_popular":
        method = "Least popular"
    else:
        method = method.capitalize()
    context = {'search_query': x.capitalize(), 'number_of_events': number_of_events, 'all_events': method_list, 'category_filter': category, 'method_filter': method}
    return render(request, 'menu/search_result.html', context)


def map(request):
    all_events = Event.objects.all()
    all_events = only_future(all_events)
    content = {'events': all_events}
    return render(request, 'menu/map.html', content)