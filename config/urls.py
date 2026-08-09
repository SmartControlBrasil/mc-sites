"""
URL configuration for MC-SITES.
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('src.institutional.presentation.urls')),
    path('admin/', admin.site.urls),
]
