from django.urls import path
from . import views
import menu

urlpatterns = [
    path('', views.index, name='event-index'),
    path('<int:id>', menu.views.getEventById, name="event-details")
]