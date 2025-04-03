from rest_framework import viewsets
from .serializers import ItemSerializer, CategorySerializer, PriceRangeSerializer, AdvertiseSerializer
from .models import Category, PriceRange, Advertise, Item

# Create your views here.
class CategoryViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PriceRangeViewset(viewsets.ReadOnlyModelViewSet):
    queryset = PriceRange.objects.all()
    serializer_class = PriceRangeSerializer

class ItemViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class AdvertiseViewset(viewsets.ReadOnlyModelViewSet):
    queryset = Advertise.objects.all()
    serializer_class = AdvertiseSerializer