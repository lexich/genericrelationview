# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

setup(
    name='django-genericrelationview',
    version='0.0.2',
    include_package_data=True,
    packages=find_packages(),
    url='https://github.com/lexich/genericrelationview',
    license='BSD',
    author='lexich',
    author_email='lexich121@gmail.com',
    description='django admin interface for GenericForeignKey fields',
    long_description=open("README.md", "r").read()
)
