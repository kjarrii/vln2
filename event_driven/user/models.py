from django.contrib.auth.models import AbstractUser, User
from django.utils.translation import gettext_lazy as _
from django.db import models

# Create your models here.
class Users(AbstractUser):
    #user = models.OneToOneField(AbstractUser, on_delete=models.CASCADE)
    #image = models.ImageField(upload_to='profile_image', blank=True)
    #favorite_categories = models.CharField(max_length=9999)
    username = models.CharField(max_length=255, unique=False)
    email = models.EmailField(_('email address'), unique=True)
    REQUIRED_FIELDS = []
    USERNAME_FIELD = 'email'
    #booking = models.CharField(max_length=1000)
    #username = models.CharField(max_length=255, unique=False)
    #user = models.CharField(max_length=255, unique=False)

class UserProfile(models.Model):
    user = models.OneToOneField(Users, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_image', blank=True)
    favorite_categories = models.CharField(max_length=9999)
    #email = models.ForeignKey(Users(Online))
    booking = models.CharField(max_length=1000)