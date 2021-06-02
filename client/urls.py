from django.urls import path
from .views import index

# needed for return in spotify/views.py spotify_callback return
app_name = 'client'

urlpatterns = [
    path('', index, name=''),
    path('demo/insecure', index),
    path('demo/secure', index),
]
