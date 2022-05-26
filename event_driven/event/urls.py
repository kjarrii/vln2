from django.urls import path
from . import views
import menu

urlpatterns = [
    path('', views.index, name='event-index'),
    path('<int:id>', views.get_event_by_id, name="event"),
    path('create_event', views.create_event, name="create_event")
]