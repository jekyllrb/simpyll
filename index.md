---
---

{{ page.url }}

  {% for page in site.pages %}
    {% unless page.sitemap.exclude == "yes" %}
    {{site.url }}{{ page.url | remove: "index.html" }}
    {% endunless %}
  {% endfor %}

Variables

Root
File
Directory
Extention
Depth

<ul>
{% for page in site.pages %}

<li>depth: {{ page.url | split: "/" | size | minus: 1 | sort }}</li>

{% endfor %}
</ul>
