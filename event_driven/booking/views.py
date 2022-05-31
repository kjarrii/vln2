from django.shortcuts import render
from django.http import HttpResponse
from event.models import Event

# Create your views here.
def index(request,id):
    if request.user.is_authenticated:
        current_event = Event.objects.get(pk=id)
        return_prices = []
        return_type = []
        for i in current_event.prices.split(','):
            x = i.split(':')
            return_prices.append(x[1])
            return_type.append(x[0])
        context = {'event': current_event, 'prices': return_prices, 'types': return_type}
        return render(request, 'booking/select_tickets.html', context)
    else:
        return render(request, 'user/login.html')


def select_delivery(request):
    context = {}
    if request.user.is_authenticated:
        return render(request, 'booking/select_delivery.html', context)
    else:
        return render(request, 'user/login.html')