from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Users(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='profile_image', blank=True)
    favorite_categories = models.CharField(max_length=9999)
    email = models.CharField(max_length=255)
    booking = models.CharField(max_length=1000)

