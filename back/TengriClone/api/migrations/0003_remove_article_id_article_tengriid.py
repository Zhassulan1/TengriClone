# Generated by Django 5.0.3 on 2024-04-09 23:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_datekeeper_article_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='id',
        ),
        migrations.AddField(
            model_name='article',
            name='TengriID',
            field=models.IntegerField(default=0, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
