from rest_framework import serializers

from api.models import Article

class ArticleSerializer(serializers.Serializer):
    category = serializers.CharField(max_length=50)
    articleURL = serializers.CharField(max_length=200)
    TengriID = serializers.IntegerField()
    imgURL = serializers.CharField(max_length=200)
    title = serializers.CharField(max_length=500)
    announce = serializers.CharField(max_length=500)
    pub_date = serializers.CharField(max_length=20)
    viewings = serializers.CharField(max_length=10)
    comments = serializers.CharField(max_length=10)

    def create(self, validated_data):        
        instance = Article(
            category = validated_data.get('category'),
            articleURL = validated_data.get('articleURL'),
            TengriID = validated_data.get('TengriID'),
            imgURL = validated_data.get('imgURL'),
            title = validated_data.get('title'),
            announce = validated_data.get('announce'),
            pub_date = validated_data.get('pub_date'),
            viewings = validated_data.get('viewings'),
            comments = validated_data.get('comments'),
        )

        instance.save()
        return instance
    
class SimpleSerializer(serializers.Serializer):
    category = serializers.CharField(max_length=50)
    articleURL = serializers.CharField(max_length=200)
    TengriID = serializers.IntegerField()
    
    def create(self, validated_data):
        instance = Article(
            category = validated_data.get('category'),
            articleURL = validated_data.get('articleURL'),
            TengriID = validated_data.get('TengriID'),
        )
        instance.save()
        return instance