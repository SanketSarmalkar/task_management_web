from django import views
from django.shortcuts import render
from .serializer import TaskSerializer
from .models import task
from rest_framework import viewsets

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    queryset = task.objects.all()
    serializer_class = TaskSerializer