#-*- coding: utf-8 -*-
from genericrelationview.views import get_generickey_json

__author__ = 'efremov'

from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^generictype$', get_generickey_json , name='generickey_json', ),
)

