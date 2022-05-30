from django.shortcuts import render
from django.http import HttpResponse
from event.models import Event

# Create your views here.
def index(request,id):
    current_event = Event.objects.get(pk=id)
    context = {'event': current_event}
    return render(request, 'booking/select_tickets.html', context)
