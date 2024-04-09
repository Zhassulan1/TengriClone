from django.db import models

# Create your views here.
class Article(models.Model):
    articleURL = models.CharField(max_length=200)
    imgURL = models.CharField(max_length=200)
    title = models.CharField(max_length=500)
    announce = models.CharField(max_length=500)
    pub_date = models.CharField(max_length=20)
    viewings = models.CharField(max_length=10)
    comments = models.CharField(max_length=10)


    def to_json(self):
        return {
            'articleURL': self.articleURL,
            'imgURL': self.imgURL,
            'title': self.title,
            'announce': self.announce,
            'pub_date': self.pub_date,
            'viewings': self.viewings,
            'comments': self.comments
        }
    
    class Meta:
        verbose_name = 'Article'
        verbose_name_plural = 'Articles'
    
