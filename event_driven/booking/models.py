from django.db import models
from user.models import Users
from event.models import Event

# Create your models here.
class Ticket(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    type = models.CharField(max_length=255)
    price = models.FloatField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    holder_name = models.CharField(max_length=255)
    holder_kt = models.CharField(max_length=255)

#class Bookings(models.Model):
#    id = models.PositiveIntegerField(primary_key=True)
#    booker = models.ForeignKey(Users, on_delete=models.CASCADE)
#    tickets_id = models.CharField(max_length=255)


class Bookings(models.Model):
    tickets = models.CharField(max_length=255)
    delivery_method = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    full_name = models.CharField(max_length=255)
    street = models.CharField(max_length=255)
    no = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    eventid = models.CharField(max_length=255)
    userid = models.CharField(max_length=255)

