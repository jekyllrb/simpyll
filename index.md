---
layout: minimal
---

{{ page.url }}

Variables

Root
File
Directory
Extention
Depth

<ul>
{% for page in site.pages %}
{% if page != '/' %} 
<li>pathitems: {{ page.url | split: "/" }} 
depth: {{ page.url | split: "/" | size | minus: 1 | sort }}</li>
{% endif %}
{% endfor %}
</ul>
