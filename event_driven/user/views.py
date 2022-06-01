from django.shortcuts import render, redirect, get_object_or_404
from user.models import Users
from user.forms.profile_form import ProfileForm
from django.contrib.auth import views as auth_views
from django.views import generic
from django.urls import reverse_lazy
from event.models import Event
from booking.models import Bookings

from user.forms.forms import LoginForm, RegisterForm
# Create your views here.

def my_tickets_upcoming(request):
    #org_bookings = Bookings.objects.filter(userid=request.user).first()
    org_bookings = Bookings.objects.filter(userid=str(request.user))
    print("asdf")
    print(org_bookings)
    org_events = []
    context = {'events': org_events, 'bookings': org_bookings}
    return render(request, 'user/myticket_upcoming.html', context)

def my_tickets_past(request):
    #org_bookings = Bookings.objects.filter(userid=request.user).first()
    org_bookings = Bookings.objects.filter(userid=str(request.user))
    print("asdf")
    print(org_bookings)
    org_events = []
    context = {'events': org_events, 'bookings': org_bookings}
    return render(request, 'user/myticket_past.html', context)
def profile(request):
    profile = Users.objects.filter(email=request.user).first()
    if request.method == 'POST':
        #form = ProfileForm(request.POST, request.FILES)
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    else:
        form = ProfileForm()
    return render(request, 'user/profile.html', {'form': ProfileForm(instance=profile)})


class LoginView(auth_views.LoginView):
    form_class = LoginForm
    template_name = 'user/login.html'


class RegisterView(generic.CreateView):
    form_class = RegisterForm
    template_name = 'user/register.html'
    success_url = reverse_lazy('login')


def get_user_by_id(request, id):
    return render(request, 'user/profile.html', {
        'user': get_object_or_404(Users, pk=id)
    })
