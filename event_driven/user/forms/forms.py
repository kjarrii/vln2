from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import get_user_model
from django import forms
from django.forms import ModelForm, widgets
from event.models import Event

class RegisterForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'password1', 'password2')


class LoginForm(AuthenticationForm):
    username = forms.CharField(label='Email / Username')

class EventCreateForm(ModelForm):
    class Meta:
        model = Event
        fields = ('id','name', 'image', 'lat', 'long', 'address', 'max', 'keywords', 'prices', 'tickets_amount', 'desc','start', 'end')
