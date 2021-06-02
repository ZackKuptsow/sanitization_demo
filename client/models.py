from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50, unique=True)
    bio = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
