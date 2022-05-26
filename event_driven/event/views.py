from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from event.models import Event
from user.forms.forms import EventCreateForm


events1 = { 'id': 1, 'image': ['/static/images/sturla1.jpeg', '/static/images/sturla2.jpeg', '/static/images/sturla3.jpeg', '/static/images/sturla4.jpeg']
        , 'lat': 1, 'long': 66, 'name': 'Sturla Atls in Laugardalsholl',
        'address': 'Laugardalsholl Engjavegur 8, 104 Reykjavík', 'date': 'Feb 29', 'tickets': 1000, 'tickets_sold': 20,
        'description': ['Sturla Atlas is once again going to blow up the roof of Laugardalshöll. Be there or be square.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor. Volutpat lacus laoreet non curabitur gravida arcu ac tortor. In cursus turpis massa tincidunt dui ut ornare. Ultrices vitae auctor eu augue ut lectus arcu bibendum. A arcu cursus vitae congue. Eget magna fermentum iaculis eu non diam phasellus vestibulum. Mattis aliquam faucibus purus in massa tempor nec feugiat.', 'Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. A arcu cursus vitae congue. Eget magna fermentum iaculis eu non diam pha.'],
        'price': {'Student': 2300, 'Adult': 2349}}

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