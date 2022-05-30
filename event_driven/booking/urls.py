from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>', views.index, name='booking-index'),
    path('ticket_holders/<int:number>', views.index, name='ticket_holders')
]