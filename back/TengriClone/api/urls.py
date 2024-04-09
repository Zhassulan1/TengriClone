from django.urls import path

from api.views import articles_list

urlpatterns = [
    # path('companies/', companies_list),
    path('category/<str:category>/', articles_list),
    # path('companies/<int:pk>/vacancies/', company_vacancies),
    # path('vacancies/', vacancies_list),
    # path('vacancies/<int:pk>/', vacancy_detail),
    # path('top_ten/', top_ten_vacancies),
]