from django.db import models
from user.models import Users
from event.models import Event
# Create your models here.
class Ticket(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    type = models.CharField(max_length=255)
    price = models.FloatField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE)

class Bookings(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    bookerid = models.ForeignKey(Users, on_delete=models.CASCADE)
    tickets = models.ForeignKey(Ticket, on_delete=models.CASCADE)

