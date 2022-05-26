from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.forms import AuthenticationForm
from user.models import Users
from user.forms.profile_form import ProfileForm
from user.forms.register_form import RegisterForm
from user.forms.login_form import LoginForm
from django.contrib.auth import views as auth_views
from django.views import generic
from django.urls import reverse_lazy

from user.forms.forms import LoginForm, RegisterForm
# Create your views here.


#def register(request):
#    if request.method == 'POST':
#        form = RegisterForm(data=request.POST)
#        if form.is_valid():
#            form.save()
#            return redirect('login')
#    return render(request, 'user/register.html', {
#        'form': RegisterForm()
#    })


def profile(request):
    profile = Users.objects.get(email__exact='karigeorgs@gmail.com')
    #profile = Users.objects.filter(user=request.email).first()
    if request.method == 'POST':
        form = ProfileForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    return render(request, 'user/profile.html', {
        'form': ProfileForm(instance=profile)
    })


#def login(request):
#    if request.method == 'POST':
#        form = LoginForm(data=request.POST)
#        if form.is_valid():
#            return redirect('/')
#    return render(request, 'user/login.html', {'form': form})


class LoginView(auth_views.LoginView):
    form_class = LoginForm
    template_name = 'user/login.html'


class RegisterView(generic.CreateView):
    form_class = RegisterForm
    template_name = 'user/register.html'
    success_url = reverse_lazy('login')
