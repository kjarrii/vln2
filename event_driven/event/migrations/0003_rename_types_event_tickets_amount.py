# Generated by Django 4.0.4 on 2022-05-24 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0002_rename_maximum_attendees_event_max_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='types',
            new_name='tickets_amount',
        ),
    ]
