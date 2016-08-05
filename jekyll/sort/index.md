---
title: sort
layout: default
---

<style>
* {font-size: 100%; font-family: "liberation sans", arial, sans-serif; color: black; }
.tran15 { -o-transition: all 1.5s;-moz-transition: all 1.5s;-webkit-transition: all 1.5s; }
.tran2 { -o-transition: all 2s;-moz-transition: all 2s;-webkit-transition: all 2s; }
#nav { padding: 1ex; border: 2px solid #aaa; background-color: #ccf; margin: 1em; width: 20em; }
#nav:hover { border: 2px solid #ddd; background-color: #eef; }
#nav h2 { display: inline; vertical-align: middle; }

.hide, .show  { display: none;  font-size: 80%; vertical-align: middle; }

@media all and (min-width:1px) { .hide, .show  { display: inline; } }

a.hide:focus + .show { display: inline; }
.show { display: none; }
a.hide:focus { display: none; }

#menu { opacity: 1; height:7em; margin-top: 0em; width: auto; margin-left: -1ex; overflow: hidden; }
a.hide:focus ~ #menu { opacity: 0; height: 0em; }

@media print {
.hide, .show  { display: none; } 
#nav {position: static; border: none; width: auto;}
#menu {width: auto;} 
}

</style>

{% assign sorted_pages = (site.pages | sort: 'title') %}
{% assign sorted_pages_reversed = (site.pages | sort: 'title' | reverse ) %}

<div id="container">
<div class="tabs">

<input type="radio" name="tabs" id="tab1" checked="">
<label for="tab1"><i class="fa fa-sort-amount-asc"></i></label>

<input type="radio" name="tabs" id="tab2">
<label for="tab2"><i class="fa fa-sort-amount-desc"></i></label>

<div id="tab-content1" class="tab-content">
{% for page in sorted_pages %}<li><a href="{{ page.url }}">{{ page.title }}</a></li>{% endfor %}
</div> 

<div id="tab-content2" class="tab-content">
{% for page in sorted_pages_reversed %}<li><a href="{{ page.url }}">{{ page.title }}</a></li>{% endfor %}
</div>

</div>
</div>
