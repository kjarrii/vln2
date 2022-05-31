# Generated by Django 4.0.4 on 2022-05-31 19:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0005_rename_tickets_bookings_tickets_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bookings',
            name='booker',
        ),
        migrations.AddField(
            model_name='bookings',
            name='city',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='country',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='email',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='eventid',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='full_name',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='name',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='no',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='phone',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='street',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='tickets',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='userid',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='bookings',
            name='zip',
            field=models.CharField(default='asdf', max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='bookings',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
