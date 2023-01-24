from rest_framework import serializers

from api_app.models import Patient

class Patientserializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient
        fields =['patient_id','first_name','last_name','blood']