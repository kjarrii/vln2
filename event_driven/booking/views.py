from django.shortcuts import render
from django.http import HttpResponse
from event.models import Event
from booking.forms import booking_form

# Create your views here.
def index(request,id):
    if request.user.is_authenticated:
        current_event = Event.objects.get(pk=id)
        context = {'event': current_event}
        return render(request, 'booking/select_tickets.html', context)
    else:
        return render(request, 'user/login.html')


def select_delivery(request):
    context = {}
    if request.user.is_authenticated:
        return render(request, 'booking/select_delivery.html', context)
    else:
        return render(request, 'user/login.html')

def select_payment(request):
    context = {}
    if request.user.is_authenticated:
        return render(request, 'booking/select_payment.html', context)
    else:
        return render(request, 'user/login.html')

def reciept(request):
    context = {}
    if request.user.is_authenticated:
        form = booking_form
        return render(request, 'booking/reciept.html', context)
    else:
        return render(request, 'user/login.html')


def finish_booking(request):
    form = booking_form
    context = {"form": form}
    return render(request, 'booking/select_payment.html', context)