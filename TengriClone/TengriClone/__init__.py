# import json
# from api.serializers import ArticleSerializer
# from api.parse import parse_rubric
# from api.models import Article


# async def prepare_db():
#     articles = Article.objects.all()
    
#     if len(articles) < 10:
#         data = parse_rubric('News') + parse_rubric('Articles') + parse_rubric('Find-Out')
#         serializer = ArticleSerializer(data=data, many=True)
#         if serializer.is_valid():
#             serializer.save()
#             print('Serialized Data is valid')
#         print('Serialization error:', serializer.errors)
#         exit(1)
#     print('DB is ready')


# prepare_db()