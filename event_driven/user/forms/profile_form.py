from django.forms import ModelForm, widgets
from user.models import UserProfile


class ProfileForm(ModelForm):
    class Meta:
        model = UserProfile
        fields = ['favorite_categories', 'image', 'first_name']