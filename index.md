---
---

{{ page.url }}

  {% for page in site.pages %}

    {{site.url }}{{ page.url | remove: "index.html" }}
  
  {% endfor %}

Variables

Root
File
Directory
Extention
Depth

<ul>
{% for page in site.pages %}

<li>{{ page.url | split: "/" | size | minus: 1 | sort }}</li>

{% endfor %}
</ul>
