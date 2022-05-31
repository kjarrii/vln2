from django.forms import ModelForm
from booking.models import Bookings

class ProfileForm(ModelForm):
    class Meta:
        model = Bookings
        fields = ['tickets', 'name', 'email', 'phone', 'full_name', 'street', 'no', 'city', 'zip', 'country', 'eventid', 'userid']