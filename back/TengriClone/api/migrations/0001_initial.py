# Generated by Django 5.0.3 on 2024-04-09 17:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('articleURL', models.CharField(max_length=200)),
                ('imgURL', models.CharField(max_length=200)),
                ('title', models.CharField(max_length=500)),
                ('announce', models.CharField(max_length=500)),
                ('pub_date', models.CharField(max_length=20)),
                ('viewings', models.CharField(max_length=10)),
                ('comments', models.CharField(max_length=10)),
            ],
            options={
                'verbose_name': 'Article',
                'verbose_name_plural': 'Articles',
            },
        ),
    ]
