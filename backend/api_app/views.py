from django.shortcuts import render
from rest_framework import viewsets
from api_app.models import Patient
from api_app.serializers import Patientserializers


# Create your views here.


class PatientViewSets(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = Patientserializers
    



