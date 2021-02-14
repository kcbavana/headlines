from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=50)
    summary = models.CharField(max_length=150)

class Source(models.Model):
    name = models.CharField(max_length=30)
    article_title = models.CharField(max_length=50)
