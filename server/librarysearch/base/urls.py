from django.urls import path
from .views import search_books

urlpatterns = [
    path('api/books/search/', search_books, name='search_books'),
]
