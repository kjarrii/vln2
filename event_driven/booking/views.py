from django.shortcuts import render
from django.http import HttpResponseRedirect
from event.models import Event
from booking.forms.booking_form import BookingForm

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
    if request.user.is_authenticated:
        if request.method == 'POST':
            form = BookingForm(request.POST)
            if form.is_valid():
                form.save()
                return HttpResponseRedirect('reciept')
        else:
            form = BookingForm()
            context = {'form': form}
            return render(request, 'booking/select_payment.html', context)
    else:
        return render(request, 'user/login.html')

def reciept(request):
    if request.user.is_authenticated:
        context = {}
        return render(request, 'booking/reciept.html', context)
    else:
        return render(request, 'user/login.html')
