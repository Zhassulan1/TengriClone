from django.urls import path

from api.views import articles_list, search

urlpatterns = [
    path('category/<str:category>/', articles_list),
    path('search/<str:query>/', search),
]