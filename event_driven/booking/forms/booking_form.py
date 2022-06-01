from booking.models import Bookings
from django import forms
from django.forms import ModelForm

class BookingForm(ModelForm):
    class Meta:
        model = Bookings
        fields = ['tickets', 'name', 'email', 'phone', 'full_name', 'street', 'no', 'city', 'zip', 'country', 'eventid', 'userid']