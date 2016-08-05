---
title: Home
layout: default
---

<link rel="stylesheet" href="{{ 'jekyll/sort/sort.css' | prepend:site.baseurl }}">

{% assign sorted_pages = (site.pages | sort: 'title') %}
{% assign sorted_pages_reversed = (site.pages | sort: 'title' | reverse ) %}

<div id="container">
<div class="tabs">

<input type="radio" name="tabs" id="tab1" checked="">
<label for="tab1"><i class="fa fa-sort-amount-asc"></i><span>Acending</span></label>

<input type="radio" name="tabs" id="tab2">
<label for="tab2"><i class="fa fa-sort-amount-desc"></i><span>Decending</span></label>

<div id="tab-content1" class="tab-content">
{% for page in sorted_pages %}<li><a href="{{ page.url }}">{{ page.title }}</a></li>{% endfor %}
</div> 

<div id="tab-content2" class="tab-content">
{% for page in sorted_pages_reversed %}<li><a href="{{ page.url }}">{{ page.title }}</a></li>{% endfor %}
</div>

</div>
</div>
