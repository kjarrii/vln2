from event.models import Event
from django.forms import ModelForm

class EventAmountForm(ModelForm):
    class Meta:
        model = Event
        fields = ['tickets_amount']