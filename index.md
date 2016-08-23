---
layout: simp
---

{% assign crumbs = page.url | remove:'/index.html' | split: '/' %}

<label for="show-menu" class="show-menu">Menu</label>
<input type="checkbox" id="show-menu" role="button">

<ul id="menu">
<li><a>Home</a>
<ul class="hidden">
{% assign page_url = page.url %}
{% assign url_parts = page.url | replace: '/','-' | append: '@' | remove: '-@' | replace: '-','/' | split: '/' %}
{% capture url_parts_size %}{{ url_parts | size }}{% endcapture %}
{% capture rm %}{{ url_parts | last | append: '/' }}{% endcapture %}
{% capture base_url %}{{ page.url | replace: rm, '' }}{% endcapture %}
{% for node in site.pages %}
{% assign node_url_parts = node.url | replace: '/','-' | append: '@' | remove: '-@' | replace: '-','/' | split: '/' %}
{% capture node_url_rm %}{{ node.url | split: '/' | last | append: '/' }}{% endcapture %}
{% capture node_url_base %}{{ node.url | replace: node_url_rm, '' }}{% endcapture %}
{% if node_url_base == page_url %}<li><a href="{{node.url}}">{{node.title}}</a></li>{% endif %}
{% endfor %}
</ul>
</li>
</ul>
