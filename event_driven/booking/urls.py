from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>', views.index, name='booking-index'),
    path('select_delivery', views.select_delivery, name='select_delivery')
]