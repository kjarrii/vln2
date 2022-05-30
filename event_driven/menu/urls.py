from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='menu-index'),
    path('all_events', views.get_all_events, name="all_events"),
    path('map', views.map, name="map"),
    path('<str:category>', views.get_category_by_string, name="category")
]