from rest_framework import serializers

from api.models import Article

class ArticleSerializer(serializers.Serializer):
    category = serializers.CharField(max_length=50)
    articleURL = serializers.CharField(max_length=200)
    imgURL = serializers.CharField(max_length=200)
    title = serializers.CharField(max_length=500)
    announce = serializers.CharField(max_length=500)
    pub_date = serializers.CharField(max_length=20)


    def create(self, validated_data):        
        instance = Article(
            category = validated_data.get('category'),
            articleURL = validated_data.get('articleURL'),
            imgURL = validated_data.get('imgURL'),
            title = validated_data.get('title'),
            announce = validated_data.get('announce'),
            pub_date = validated_data.get('pub_date'),
        )

        instance.save()
        return instance
