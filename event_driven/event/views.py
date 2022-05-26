from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from event.models import Event

def index(request):
    context = {'events': Event.objects.all().order_by('id')}
    return render(request, 'event/index.html', context)

def get_event_by_id(request, id):
    return render(request, 'event/index.html', {
        'event': get_object_or_404(Event, pk=id)
    })
