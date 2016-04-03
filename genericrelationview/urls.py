# -*- coding: utf-8 -*-
from genericrelationview.views import get_generickey_json
from django.conf.urls import patterns, url

__author__ = 'lexich'

urlpatterns = patterns(
    '',
    url(r'^generictype$', get_generickey_json, name='generickey_json')
)
