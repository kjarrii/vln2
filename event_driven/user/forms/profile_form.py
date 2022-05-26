from django.forms import ModelForm, widgets
from user.models import Users


class ProfileForm(ModelForm):
    class Meta:
        model = Users
        exclude = ['id', 'booking']
        fields = ['image', 'favorite_categories', 'email']