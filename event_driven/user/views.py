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
from django.http import HttpResponseRedirect

from user.forms.forms import LoginForm, RegisterForm

def my_tickets_upcoming(request):
    if request.user.is_authenticated:
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
    else:
        return HttpResponseRedirect('../../user/login')

def my_tickets_past(request):
    if request.user.is_authenticated:
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
    else:
        return HttpResponseRedirect('../../user/login')

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

def only_future(all_events):
    return_events = []
    utc = pytz.UTC
    curr_date = utc.localize(datetime.datetime.now())
    for event in all_events:
        start_date = event.start
        if start_date > curr_date:
            return_events.append(event)
    return return_events

def not_sold_out(all_events):
    return_events = []
    for event in all_events:
        if event.tickets_left() == 0:
            continue
        else:
            return_events.append(event)
    return return_events
def profile(request):
    if request.user.is_authenticated:
        profile = Users.objects.filter(email=request.user).first()
        if profile.favorite_categories == "":
            events = None
        else:
            events = Event.objects.all()
            if profile is None:
                events = None
            else:
                events = my_events(profile.favorite_categories, events)
                events = only_future(events)
                events = not_sold_out(events)
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
    else:
        return HttpResponseRedirect('../../user/login')


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
