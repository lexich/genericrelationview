# -*- coding: utf-8 -*-
from django.contrib.contenttypes.models import ContentType
from django.core import serializers
from django.http import HttpResponse, Http404
from django.contrib.auth.decorators import login_required

__author__ = 'lexich'


@login_required
def get_generickey_json(request):
    id = request.GET.get('id', None)
    if not id:
        raise Http404("id GET parameter")
    model_type = ContentType.objects.get_for_id(id)
    data = ContentType.get_all_objects_for_this_type(model_type)
    json = serializers.serialize('json', data)
    return HttpResponse(json, content_type='application/json')
