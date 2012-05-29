#-*- coding: utf-8 -*-
__author__ = 'lexich'
from genericrelationview.views import get_generickey_json



from django.conf.urls import patterns, url

urlpatterns = patterns('',
    url(r'^generictype$', get_generickey_json , name='generickey_json', ),
)

