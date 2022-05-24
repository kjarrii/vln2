from django.shortcuts import render, get_object_or_404


# Create your views here.
def index(request):
    return render(request, 'menu/index.html')

def getEventById(request, id):
    return render(request, 'event.html', {
        'event': get_object_or_404(event, pk=id)
    })