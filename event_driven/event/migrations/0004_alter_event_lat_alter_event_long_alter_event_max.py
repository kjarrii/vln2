# Generated by Django 4.0.4 on 2022-05-24 17:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('event', '0003_rename_types_event_tickets_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='lat',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='long',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='event',
            name='max',
            field=models.CharField(max_length=255),
        ),
    ]
