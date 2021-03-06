from django.contrib.auth.views import LogoutView
from django.urls import path
from django.conf import settings
from user.views import LoginView, RegisterView
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('profile', views.profile, name='profile'),
    path('my_tickets_upcoming', views.my_tickets_upcoming, name='my_tickets_upcoming'),
    path('my_tickets_past', views.my_tickets_past, name="my_tickets_past"),
    path('logout', LogoutView.as_view(next_page='login'), name='logout'),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



