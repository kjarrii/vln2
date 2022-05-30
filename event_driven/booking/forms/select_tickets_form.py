from django.forms import ModelForm
from booking.models import Bookings

class ProfileForm(ModelForm):
    class Meta:
        model = Bookings
        fields = ['', 'image']