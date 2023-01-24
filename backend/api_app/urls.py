from django.contrib import admin
from django.urls import path,include
from rest_framework import routers

from api_app.views import PatientViewSets


router = routers.DefaultRouter()
router.register(r'patient',PatientViewSets)

urlpatterns = [
    
    path('',include(router.urls)),

]