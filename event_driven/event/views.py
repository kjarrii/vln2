from django.shortcuts import render
from django.http import HttpResponse


events = { 'id': 1, 'image': ['/static/images/sturla1.jpeg', '/static/images/sturla2.jpeg', '/static/images/sturla3.jpeg', '/static/images/sturla4.jpeg']
        , 'lat': 1, 'long': 66, 'name': 'Sturla Atls in Laugardalsholl',
        'address': 'Laugardalsholl Engjavegur 8, 104 Reykjavík', 'date': 'Feb 29', 'tickets': 100, 'tickets_sold': 20,
        'description': 'Sturla Atlas is once again going to blow up the roof of Laugardalshöll. Be there or be square',
        'price': {'Student': 2300, 'Adult': 2349}}

def index(request):
    return render(request, 'event/index.html', context={
        'events': events})
