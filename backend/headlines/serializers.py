from rest_framework import serializers
from .models import Article, Source

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('pk', 'title', 'summary')