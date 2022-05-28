from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='menu-index'),
    path('<str:category>', views.get_category_by_string, name="category"),
]