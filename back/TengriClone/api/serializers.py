from rest_framework import serializers

from api.models import Article

class ArticleSerializer(serializers.Serializer):
    articleURL = serializers.CharField(max_length=200)
    imgURL = serializers.CharField(max_length=200)
    title = serializers.CharField(max_length=500)
    announce = serializers.CharField(max_length=500)
    pub_date = serializers.CharField(max_length=20)
    viewings = serializers.CharField(max_length=10)
    comments = serializers.CharField(max_length=10)
    instance = Article()
    def create(self, validated_data):
        
        # return Article.objects.create(**validated_data)
    
        instance = Article(
            articleURL = validated_data.get('articleURL'),
            imgURL = validated_data.get('imgURL'),
            title = validated_data.get('title'),
            announce = validated_data.get('announce'),
            pub_date = validated_data.get('pub_date'),
            viewings = validated_data.get('viewings'),
            comments = validated_data.get('comments'),
        )

        instance.save()
        return instance
