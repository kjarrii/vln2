from django.forms import ModelForm, widgets
from user.models import UserProfile


class ProfileForm(ModelForm):
    class Meta:
        model = UserProfile
        exclude = ['id', 'booking']
        fields = ['image', 'favorite_categories']