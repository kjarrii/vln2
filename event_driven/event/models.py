from django.db import models

class Event(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=9999)
    long = models.FloatField(blank=False)
    lat = models.FloatField(blank=False)
    address = models.CharField(max_length=255)
    start = models.DateTimeField(auto_now=False, auto_now_add=False)
    end = models.DateTimeField(auto_now=False, auto_now_add=False)
    keywords = models.CharField(max_length=255)
    prices = models.CharField(max_length=255)
    max = models.CharField(max_length=255)
    tickets_amount = models.CharField(max_length=255)
    desc = models.CharField(max_length=9999)


