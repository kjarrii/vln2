from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.forms import User

class LoginForm(AuthenticationForm):
    username = forms.CharField(label='email')
    #email = forms.EmailField(required=True)

    #class Meta:
    #    model = User
    #    fields = {"email", "password"}

    #def save(self, commit=True):
    #    user = super(LoginForm, self).save(commit=False)
    #    user.email = self.cleaned_data['email']
    #    if commit:
    #        user.save()
    #    return user