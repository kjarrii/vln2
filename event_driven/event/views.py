from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from event.models import Event
from user.forms.forms import EventCreateForm
import datetime
import pytz

def index(request):
    context = {'events': Event.objects.all().order_by('id')}
    return render(request, 'event/index.html', context)

def has_passed(start_date):
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    if start_date < curr_date:
        return True
    else:
        return False

def get_event_by_id(request, id):
    org_events = Event.objects.all().order_by('name')
    current_event = Event.objects.get(pk=id)
    current_event_keywords = current_event.keywords
    current_event_keywords_list = current_event_keywords.split(',')
    keyword_events = []
    for event in org_events:
        temp_list_of_keywords = event.keywords.split(',')
        if event.id == id:
            continue
        else:
            for key in current_event_keywords_list:
                if key in temp_list_of_keywords:
                    keyword_events.append(event)
                    break
    similar_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in keyword_events:
        start_date = event.start
        if start_date > curr_date:
            similar_events.append(event)

    context = {'event': get_object_or_404(Event, pk=id), 'similar_events': similar_events, 'event_passed': has_passed(current_event.start)}
    return render(request, 'event/index.html', context)

def create_event(request):
    if request.method == 'POST':
        form = EventCreateForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('create_event')

    else:
        form = EventCreateForm()
    return render(request, 'event/create_event.html', {
        'form': form
    })
