from django.http import JsonResponse
# from api.serializers import ArticleSerializer
from django.views.decorators.csrf import csrf_exempt
from api.parse import parse_rubric

# from api.models import Article
# import json

@csrf_exempt
def articles_list(request, category='News'):
    # articles = Article.objects.all()
    articles = parse_rubric(category)
    print('Finished parsing')
    # serializer = ArticleSerializer(articles, many=True)
    return JsonResponse(articles, safe=False)
