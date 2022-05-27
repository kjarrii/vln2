from django.contrib.auth.models import AbstractUser, User
from django.utils.translation import gettext_lazy as _
from django.db import models

# Create your models here.
class Users(AbstractUser):
    username = models.CharField(max_length=255, unique=False)
    email = models.EmailField(_('email address'), unique=True)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    favorite_categories = models.CharField(max_length=9999)
    image = models.ImageField(upload_to='profile_image', blank=True)
    booking_reference = models.CharField(max_length=1000, blank=True)

class UserProfile(models.Model): # Þarf þennan clasa til að reference-a rétt en veit ekki nákvæmlega af hverju.
    user = models.OneToOneField(Users, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_image', blank=True)
    favorite_categories = models.CharField(max_length=9999)
    booking = models.CharField(max_length=1000)