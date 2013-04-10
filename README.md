genericrelationview
===================

#About

django admin interface for GenericForeignKey fields

##Usage

###in settings.py

INSTALLED_APPS = ( ... ,'genericrelationview',)

###in url.py
urlpatterns =( ..., url(r"^your_path/", include("genericrelationview.urls")),)

###in admin.py
for ModelAdmin class using GenericAdminMixin as mixin
