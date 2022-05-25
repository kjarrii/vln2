from django.forms import ModelForm, widgets
from user.models import Users
class ProfileForm(ModelForm):
    class Meta:
        model = Users
        exclude = ['id', 'user']
        widgets = {'favorite_categories': widgets.Select(attrs={'class': 'form-control'}),
                   'profile_image': widgets.TextInput(attrs={'class': 'form-control'})
                   }
