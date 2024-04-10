from django.http import JsonResponse
from api.serializers import ArticleSerializer, SimpleSerializer
from django.views.decorators.csrf import csrf_exempt
from api.parse import parse_rubric

from api.models import Article
# import json

@csrf_exempt
def articles_list(request, category='News'):
    prepare_db()
    try :
        articles = Article.objects.all()
    
    except Article.DoesNotExist as e:
        return JsonResponse({'error': str(e)}) 
    
    print('Finished parsing')
    serializer = ArticleSerializer(articles, many=True)
    return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def search(request, query):
    articles = parse_rubric(f'search/?text={query}', 2)

    new_list = []
    for article in articles:
        new_dict = {
            'articleURL': article['articleURL'],
            'TengriID': article['TengriID'],
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
def find_article(request, TengriID):
    articles = Article.objects.all()
    article = {}

    for item in articles:
        if item.TengriID == TengriID:
            article = item
            break

    print('Found article: ', articles)
    serializer = ArticleSerializer(data=[article], many=False)
    if serializer.is_valid():
        serializer.save()
        print('Serialized Data is valid')
    else:
        print('Serialization error:', serializer.errors)

    return JsonResponse(article, safe=False)


    # new_article = {
    #     'articleURL': article.articleURL,
    #     'TengriID': article.TengriID,
    #     'category': article.category,
    #     'imgURL': '',
    #     'title': '',   
    #     'announce': '',
    #     'pub_date': '',
    #     'viewings': '',
    #     'comments': '',
    # }




def prepare_db():
    print('Checking DB')

    existing_data = Article.objects.all()
    if len(existing_data) < 10:
        data = parse_rubric('news') + parse_rubric('article') + parse_rubric('find-out')
        
        unique_data = []
        for item in data:
            if item not in existing_data:
                unique_data.append(item)


        serializer = ArticleSerializer(data=unique_data, many=True)
        if serializer.is_valid():
            serializer.save()
            print('Serialized Data is valid')
        else: 
            print('Serialization error:', serializer.errors)
            exit(1)

    print('DB is ready')