from django.shortcuts import render, get_object_or_404
from event.models import Event

# Create your views here.
def index(request):
    context = {'events': Event.objects.all().order_by('id')}
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