---
layout:   default
title:    tags
---

{% assign rawtags = "" %}

{% for page in site.pages %}
  {% assign ttags = page.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
{% endfor %}

{% assign rawtags = rawtags | split:'|' | sort %}
{% assign tags = "" %}

{% for tag in rawtags %}
  {% if tag != "" %}
    {% if tags == "" %}
      {% assign tags = tag | split:'|' %}
    {% endif %}
    {% unless tags contains tag %}
      {% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
    {% endunless %}
  {% endif %}
{% endfor %}

<br>

<ul class="tags">
  {% for tag in tags %}
  <li><a class="tag" href="#{{ tag | slugify }}">{{tag}}</a></li>
  {% endfor %}
</ul>

{% for tag in tags %}
<h2 class="tag-h2" id="{{ tag | slugify }}">{{ tag }}</h2>
<div class="tags">
  {% for page in site.pages %}
  {% if page.tags contains tag %}
  <h3 class="list-show"><a href="{{ page.url }}">{{ page.title }}</a></h3>
  {% endif %}
  {% endfor %}
</div>
{% endfor %}
