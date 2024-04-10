from django.urls import path

from api.views import articles_list, search, find_article

urlpatterns = [
    path('category/<str:category>/', articles_list),
    path('search/<str:query>/', search),
    path('article/<int:TengriID>/', find_article),
]