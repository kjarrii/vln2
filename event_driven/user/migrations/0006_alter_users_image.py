# Generated by Django 4.0.4 on 2022-05-25 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_alter_users_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='image',
            field=models.ImageField(blank=True, upload_to='profile_image'),
        ),
    ]