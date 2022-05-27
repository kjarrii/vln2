from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from event.models import Event
from user.forms.forms import EventCreateForm

def index(request):
    context = {'events': Event.objects.all().order_by('id')}
    return render(request, 'event/index.html', context)

def get_event_by_id(request, id):
    return render(request, 'event/index.html', {
        'event': get_object_or_404(Event, pk=id)
    })

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
