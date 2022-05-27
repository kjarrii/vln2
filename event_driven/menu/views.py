from django.shortcuts import render, get_object_or_404
from event.models import Event

# Create your views here.
def index(request):
    context = {'events': Event.objects.all().order_by('id')}
    return render(request, 'menu/index.html', context)


