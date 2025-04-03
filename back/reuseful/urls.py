from rest_framework import routers
from .views import CategoryViewset, PriceRangeViewset, ItemViewset, AdvertiseViewset

router = routers.DefaultRouter()
router.register('category', CategoryViewset)
router.register('priceRange', PriceRangeViewset)
router.register('item', ItemViewset)
router.register('advertise', AdvertiseViewset)