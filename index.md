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
{% if page.url != '/' %} 
<li>pathitems: {{ page.url | split: "/" | sort }} </li>
depth: {{ page.url | split: "/" | size | minus: 1 | sort }}
{% endif %}
{% endfor %}
</ul>
