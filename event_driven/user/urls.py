from django.contrib.auth.views import LoginView, LogoutView
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns = [
    path('register', views.register, name='register'),
    path('profile', views.profile, name='profile'),
    #path('login', LoginView.as_view(template_name='user/login-reg-base.html'), name='login'),
    path('login', LoginView.as_view(template_name='user/login.html'), name='login'),
    path('logout', LogoutView.as_view(next_page='login'), name='logout')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)