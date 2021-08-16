#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pathlib
import datetime

path = str(datetime.datetime.now())+".txt"
with open(path,'w') as f:    
  f.write('')

