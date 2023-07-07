from django.db import models
import uuid

class Book(models.Model):
    GENRE_CHOICES = [
        ('fiction', 'Fiction'),
        ('nonfiction', 'Non-Fiction'),
        ('fantasy', 'Fantasy'),
    ]

    title = models.CharField(max_length=100)
    author = models.CharField(max_length=50)
    genre = models.CharField(max_length=20, choices=GENRE_CHOICES)
    publication_year = models.IntegerField()
    refid = models.CharField(max_length=200)
    

    def __str__(self):
        return self.title
