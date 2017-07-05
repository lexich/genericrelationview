# -*- coding: utf-8 -*-
from genericrelationview.views import get_generickey_json
from django.conf.urls import url

__author__ = 'lexich'

urlpatterns = [
    '',
    url(r'^generictype$', get_generickey_json, name='generickey_json')
]
