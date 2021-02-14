from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import ArticleSerializer, SourceSerializer
from .models import Article, Source
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup
import pandas as pd

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-gpu')
driver = webdriver.Chrome("/home/de/chromedriver", chrome_options=options)

class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    
    def list(self, request):
        titles=[]
        summaries=[]

        driver.get("https://www.nytimes.com/section/technology")

        content = driver.page_source
        soup = BeautifulSoup(content, "html.parser")
        for article in soup.findAll('article'):
            title= article.find('h2')
            summary= article.find('p')
            titles.append(title.text)
            summaries.append(summary.text)
            #print(title.text)
            #temp=[]
            #temp.append({'title':title, 'summary':summary})
        results = [{'title': t, 'summary': s} for t,s in zip(titles,summaries)]
        #results = list(zip(titles,summaries))
        return Response(results)
            
    


class SourceView(viewsets.ModelViewSet):
    serializer_class = SourceSerializer
    queryset = Source.objects.all()
