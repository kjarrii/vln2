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

    def favcat_as_list(self):
        favcat = self.favorite_categories.split(',')
        return favcat

    def all_favcat_as_list(self):
        all_favcat = 'concert,sports,pop,rock,rap,ekkert'
        return all_favcat


class UserProfile(models.Model):
    user = models.OneToOneField(Users, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=9999, blank=True)
    image = models.ImageField(upload_to='profile_image', blank=True)
    favorite_categories = models.CharField(max_length=9999, blank=True)
    booking = models.CharField(max_length=1000)