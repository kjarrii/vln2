# Generated by Django 4.0.4 on 2022-05-24 14:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user', '0001_initial'),
        ('event', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('type', models.CharField(max_length=255)),
                ('price', models.FloatField()),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='event.event')),
            ],
        ),
        migrations.CreateModel(
            name='Bookings',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('bookerid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user.users')),
                ('tickets', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='booking.ticket')),
            ],
        ),
    ]
