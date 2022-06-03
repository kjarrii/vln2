from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import User

class RegisterForm(UserCreationForm):
    email = forms.EmailField(required=True)
    class Meta:
        model = User
        fields = {"first_name", "email", "password1", "password2"}

    def save(self, commit=True):
        user = super(RegisterForm, self).save(commit=False)
        user.email = self.cleaned_data['email']
        if commit:
            user.save()
        return user