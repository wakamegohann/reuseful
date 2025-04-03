from django.contrib import admin
from .models import Category, PriceRange, Advertise, Item

# Register your models here.

admin.site.register(Category)
admin.site.register(PriceRange)
admin.site.register(Advertise)
admin.site.register(Item)