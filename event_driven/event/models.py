from django.db import models

class Event(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=9999)
    long = models.IntegerField(blank=False)
    lat = models.IntegerField(blank=False)
    address = models.CharField(max_length=255)
    start = models.DateTimeField(auto_now=False, auto_now_add=False)
    maximum_attendees = models.PositiveIntegerField(blank=True)
    keywords = models.CharField(max_length=255)
    price = models.CharField(max_length=255)

