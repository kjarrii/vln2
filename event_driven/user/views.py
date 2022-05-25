from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from user.models import Users
from user.forms.profile_form import ProfileForm

# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    return render(request, 'user/register.html', {
        'form': UserCreationForm()
    })

def profile(request):
    profile = Users.objects.filter(user=request.user).first()
    if request.method == 'POST':
        form = ProfileForm(instance=profile, data=request.POST)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('user/profile.html')
    return render(request, 'user/profile.html', {
        'form': ProfileForm(instance=profile)
    })