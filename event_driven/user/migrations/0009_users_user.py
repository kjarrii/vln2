# Generated by Django 4.0.4 on 2022-05-26 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0008_alter_users_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='user',
            field=models.CharField(default='asdfasdf', max_length=255),
            preserve_default=False,
        ),
    ]
