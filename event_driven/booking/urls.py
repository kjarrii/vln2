from django.urls import path
from . import views

urlpatterns = [
    path('<int:id>', views.index, name='booking-index'),
    path('select_delivery', views.select_delivery, name='select_delivery'),
    path('select_payment', views.select_payment, name='select_payment'),
    path('reciept', views.reciept, name='reciept')
]