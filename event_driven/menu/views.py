from django.shortcuts import render, get_object_or_404


# Create your views here.
def index(request):
    return render(request, 'menu/index.html', context={ 'pro':pro })

def getEventById(request, id):
    return render(request, 'event.html', {
        'event': get_object_or_404(event, pk=id)
    })


pro = [
    {'title': 'Sturla Atlas in Laugardalshöll', 'date': '01.12.2022', 'location': 'laugardalshöll', 'picture': '../../static/images/sturla1.jpeg'},
    {'title': 'Kaleó in Hlaðan', 'date': '01.12.2022', 'location': 'Hlaðan, gufunesbær', 'picture': '../../static/images/sturla1.jpeg'},
    {'title': 'Leikir - Stjarnan', 'date': '01.12.2022', 'location': 'TM-höllin', 'picture': '../../static/images/sturla1.jpeg'},
    {'title': 'dek', 'date': '01.12.2022', 'location': 'skeggi', 'picture': '../../static/images/sturla1.jpeg'},
]