# Generated by Django 4.0.4 on 2022-05-24 14:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.PositiveIntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('image', models.CharField(max_length=9999)),
                ('long', models.IntegerField()),
                ('lat', models.IntegerField()),
                ('address', models.CharField(max_length=255)),
                ('start', models.DateTimeField()),
                ('maximum_attendees', models.PositiveIntegerField(blank=True)),
                ('keywords', models.CharField(max_length=255)),
                ('price', models.CharField(max_length=255)),
            ],
        ),
    ]
