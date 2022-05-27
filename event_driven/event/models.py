from django.db import models

class Event(models.Model):
    id = models.PositiveIntegerField(primary_key=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=9999)
    long = models.FloatField(blank=False)
    lat = models.FloatField(blank=False)
    address = models.CharField(max_length=255)
    start = models.DateTimeField(auto_now=False, auto_now_add=False)
    end = models.DateTimeField(auto_now=False, auto_now_add=False)
    keywords = models.CharField(max_length=255)
    prices = models.CharField(max_length=255)
    max = models.CharField(max_length=255)
    tickets_amount = models.CharField(max_length=255)
    desc = models.CharField(max_length=9999)

    def images_as_list(self):
        return self.image.split(',')

    def keywords_as_list(self):
        return self.keywords.split(',')

    def desc_paragraphs(self):
        return self.desc.split('<br>')

    def price_range(self):
        Dict = dict((x.strip(), y.strip())
        for x, y in (element.split('-')
        for element in self.prices.split(', ')))
        vals = Dict.values()
        priceInt = []
        for val in vals:
            priceInt.append(val)
        if max(priceInt) != min(priceInt):
            return "{} - {}".format(max(priceInt), min(priceInt))
        return min(priceInt)
