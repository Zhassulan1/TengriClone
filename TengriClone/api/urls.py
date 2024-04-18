from django.urls import path

from api.views import articles_list, search, count_pages, count_search_pages

urlpatterns = [
    path('category/<str:category>/page/<int:page>', articles_list),
    path('search/<str:query>/', search),
    path('<str:category>/page/<str:page>/get-pages', count_pages),
    path('search/<str:query>/page/<str:page>/get-pages', count_search_pages),
]