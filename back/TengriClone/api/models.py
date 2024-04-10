from django.db import models

# Create your views here.
class Article(models.Model):
    category = models.CharField(max_length=50)
    articleURL = models.CharField(max_length=200)
    TengriID = models.IntegerField(primary_key=True)
    imgURL = models.CharField(max_length=200)
    title = models.CharField(max_length=500)
    announce = models.CharField(max_length=500)
    pub_date = models.CharField(max_length=20)
    viewings = models.CharField(max_length=10)
    comments = models.CharField(max_length=10)


    def to_json(self):
        return {
            'category': self.category,
            'articleURL': self.articleURL,
            'TengriID': self.TengriID,
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
    