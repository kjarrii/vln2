from django.db import models
from user.models import Users
from event.models import Event

class Bookings(models.Model):
    tickets = models.CharField(max_length=255)
    delivery_method = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255, blank=True)
    street = models.CharField(max_length=255, blank=True)
    no = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=255, blank=True)
    zip = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=255, blank=True)
    eventid = models.CharField(max_length=255)
    userid = models.CharField(max_length=255)

