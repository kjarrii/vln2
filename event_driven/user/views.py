from django.shortcuts import render, redirect, get_object_or_404
from user.models import Users
from user.forms.profile_form import ProfileForm
from django.contrib.auth import views as auth_views
from django.views import generic
from django.urls import reverse_lazy
from event.models import Event
from booking.models import Bookings
import datetime
import pytz

from user.forms.forms import LoginForm, RegisterForm
# Create your views here.

def my_tickets_upcoming(request):
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    org_bookings = Bookings.objects.filter(userid=str(request.user.id))
    event_list = []
    return_bookings = []
    return_events = []
    for booking in org_bookings:
        event = Event.objects.filter(id=booking.eventid).first()
        event_list.append(event)
    for i in range(0, len(event_list)):
        if event_list[i].start > curr_date:
            return_events.append(event_list[i])
            return_bookings.append(org_bookings[i])
    context = {'events': return_events, 'bookings': return_bookings}
    return render(request, 'user/myticket_upcoming.html', context)

def my_tickets_past(request):
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    org_bookings = Bookings.objects.filter(userid=str(request.user.id))
    event_list = []
    return_bookings = []
    return_events = []
    for booking in org_bookings:
        event = Event.objects.filter(id=booking.eventid).first()
        event_list.append(event)
    for i in range(0, len(event_list)):
        if event_list[i].start < curr_date:
            return_events.append(event_list[i])
            return_bookings.append(org_bookings[i])
    context = {'events': return_events, 'bookings': return_bookings}
    return render(request, 'user/myticket_past.html', context)

def my_events(categories, events):
    search_list = categories.split(",")
    return_list = []
    for event in events:
        keywords_string = event.keywords
        keywords = keywords_string.split(',')
        for word in keywords:
            for search in search_list:
                if search in word:
                    if event not in return_list:
                        return_list.append(event)
    return return_list

def profile(request):
    events = Event.objects.all()
    profile = Users.objects.filter(email=request.user).first()
    if profile is None:
        events = None
    else:
        events = my_events(profile.favorite_categories, events)
    if request.method == 'POST':
        form = ProfileForm(request.POST, request.FILES, instance=profile)
        if form.is_valid():
            profile = form.save(commit=False)
            profile.user = request.user
            profile.save()
            return redirect('profile')
    else:
        form = ProfileForm()
    return render(request, 'user/profile.html', {'form': ProfileForm(instance=profile), 'events': events})


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
