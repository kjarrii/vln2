from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _
from django.db import models

# Create your models here.
class Users(AbstractUser):
    #user = models.OneToOneField(AbstractUser, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_image', blank=True)
    favorite_categories = models.CharField(max_length=9999)
    email = models.EmailField(_('email address'), unique=True)
    booking = models.CharField(max_length=1000)
    username = models.CharField(max_length=255, unique=False)
    user = models.CharField(max_length=255, unique=False)