import uuid
from datetime import datetime, timedelta
from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(primary_key=True, max_length=10, verbose_name='カテゴリ名')

    def __str__(self):
        return self.name

class PriceRange(models.Model):
    min_price = models.IntegerField(verbose_name='価格下限')
    max_price = models.IntegerField(verbose_name='価格上限')

    def __str__(self):
        return f'{self.min_price} - {self.max_price}'

class Advertise(models.Model):
    image = models.ImageField(upload_to='adv')

def item_image_upload_to(instance, filename):
    # `instance.uuid` を使って動的にパスを生成
    extension = filename.split('.')[-1]

    return f'item/{instance.uuid}/{filename}'

class Item(models.Model):

    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(verbose_name='商品タイトル', max_length=50)
    detail = models.CharField(verbose_name='商品詳細', max_length=80)
    price = models.IntegerField(verbose_name='価格')
    price_range = models.ForeignKey(PriceRange, on_delete=models.PROTECT, verbose_name='価格帯')
    
    image1 = models.ImageField(upload_to=item_image_upload_to)
    image2 = models.ImageField(upload_to=item_image_upload_to, blank=True)
    image3 = models.ImageField(upload_to=item_image_upload_to, blank=True)
    image4 = models.ImageField(upload_to=item_image_upload_to, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    categories = models.ManyToManyField(Category, related_name="items")
    sold = models.BooleanField(default=False, verbose_name='購入済')

    @property
    def status(self):
        if self.sold:
            return 'sold'
        elif self.created_at < datetime.now().replace(tzinfo=None) - timedelta(days=15):
            return 'new'
        else:
            return 'normal'

    def __str__(self):
        return f'{self.title} - ￥{self.price}'
