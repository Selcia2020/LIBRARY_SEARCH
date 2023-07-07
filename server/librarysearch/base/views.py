from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Book
from .serializers import BookSerializer
@api_view(['GET'])
def search_books(request):
    query = request.query_params.get('query', '')
    books = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query)

    
    genre = request.query_params.get('genre')
    publication_year = request.query_params.get('publication_year')

    if genre:
        books = books.filter(genre=genre)
    if publication_year:
        books = books.filter(publication_year=publication_year)

    serializer = BookSerializer(books, many=True)
    return Response(serializer.data)
