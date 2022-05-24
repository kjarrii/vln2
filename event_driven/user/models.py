from django.db import models

# Create your models here.
class Users(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    username = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    image = models.CharField(max_length=9999)
    favorite_categories = models.CharField(max_length=9999)
    email = models.CharField(max_length=255)

