from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def user(request):
    return HttpResponse('Hello user')