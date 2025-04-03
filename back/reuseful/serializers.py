from rest_framework import serializers
from .models import Item, Category, PriceRange, Advertise

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'  # すべてのフィールドを含める
        read_only_fields = ['created_at', 'uuid']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = '__all__'

class PriceRangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceRange
        fields = '__all__'
        read_only_fields = '__all__'

class AdvertiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Advertise
        fields = '__all__'
        read_only_fields = '__all__'