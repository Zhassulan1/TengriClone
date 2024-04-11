from django.http import HttpResponse, JsonResponse
from api.serializers import ArticleSerializer
from django.views.decorators.csrf import csrf_exempt
from api.parse import parse_rubric, parse_pages_count


@csrf_exempt
def articles_list(request, category='News', page=1):
    articles = parse_rubric(f'{category}/page/{page}')
    print('Finished parsing')
    serializer = ArticleSerializer(articles, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def search(request, query):
    articles = parse_rubric(f'search/?text={query}')

    new_list = []
    for article in articles:
        new_dict = {
            'articleURL': article['articleURL'],
            'imgURL': article['imgURL'],
            'title': article['title'],
            'announce': article['announce'],
        }
        article['category'] = 'Search'
        new_list.append(new_dict)

    serializer = ArticleSerializer(data=articles, many=True)
    if serializer.is_valid():
        serializer.save()
        print('Serialized Data is valid')
    else: 
        print('Serialization error:', serializer.errors)
       
    return JsonResponse(new_list, safe=False)


@csrf_exempt
def count_pages(request, category, page):
    pagesHTML = parse_pages_count(category, page)
    return JsonResponse(pagesHTML, safe=False)


def count_search_pages(request, query, page):
    pagesHTML = parse_pages_count(f'search/?text={query}', page)
    return JsonResponse(pagesHTML, safe=False)