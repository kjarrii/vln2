from django.shortcuts import render
from django.http import HttpResponseRedirect
from event.models import Event
from event.forms.event_amount_update import EventAmountForm
from booking.forms.booking_form import BookingForm
import datetime
import pytz

# Create your views here.
def has_passed(start_date):
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    if start_date < curr_date:
        return True
    else:
        return False

def index(request,id):
    if request.user.is_authenticated:
        current_event = Event.objects.get(pk=id)
        if current_event.tickets_left() == 0:
            return HttpResponseRedirect('../user/logout')
        elif has_passed(current_event.start):
            return HttpResponseRedirect('../user/logout')
        else:
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
    if request.user.is_authenticated:
        if request.method == 'POST':
            event = Event.objects.filter(id=request.POST['eventid']).first()
            form = BookingForm(request.POST)
            eventform = EventAmountForm(request.POST, instance=event)
            if eventform.is_valid() and form.is_valid():
                eventform.save()
                form.save()
                return HttpResponseRedirect('reciept')
        else:
            eventForm = EventAmountForm()
            form = BookingForm()
            context = {'form': form, 'eventform': eventForm}
            return render(request, 'booking/select_payment.html', context)
    else:
        return render(request, 'user/login.html')

def reciept(request):
    if request.user.is_authenticated:
        context = {}
        return render(request, 'booking/reciept.html', context)
    else:
        return render(request, 'user/login.html')

def menu(request):
    return HttpResponseRedirect('../../')