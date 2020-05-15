# -*- coding: utf-8 -*-
"""
Created on 2020/04/14
@auther:李振浪
Description:cart应用中Model类注册
"""
from django.contrib import admin
from cart.models import OrderInfo, OrderGoods

# Register your models here.
admin.site.register([OrderInfo, OrderGoods])
