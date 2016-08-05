---
title: home
layout: default
---

{% include assets/scripts/table.js.html %}

{% include assets/style/elements/table.css.html %}

<table class="example table-stripeclass:alternate" id="TABLE_4">
<thead>
	<tr>
		<th colspan="4">Table Filtering</th>
	</tr>
	<tr>
		<th class="filterable">Index</th>
		<th class="filterable">Number</th>
		<th class="filterable">Name</th>
		<th class="filterable">Amount</th>
	</tr>
	<tr>
		<th>Filter:</th>
		<th><select onchange="Table.filter(this,this)"><option value="">All</option><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></th>
		<th><input name="filter" size="8" onkeyup="Table.filter(this,this)"></th>
		<th><select onchange="Table.filter(this,this)"><option value="function(){return true;}">All</option><option value="function(val){return parseFloat(val.replace(/\$/,''))>1;}">&gt; $1</option><option value="function(val){return parseFloat(val.replace(/\$/,''))<=1;}">&lt;= $1</option></select></th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>0</td>
		<td>0</td>
		<td>Bill</td>
		<td>$1.03</td>
	</tr>
	<tr class="alternate">
		<td>1</td>
		<td>1</td>
		<td>Joe</td>
		<td>$1.83</td>
	</tr>
	<tr>
		<td>2</td>
		<td>2</td>
		<td>Bob</td>
		<td>$1.83</td>
	</tr>
	<tr class="alternate">
		<td>3</td>
		<td>3</td>
		<td>Matt</td>
		<td>$1.43</td>
	</tr>
	<tr>
		<td>4</td>
		<td>4</td>
		<td>Mark</td>
		<td>$1.33</td>
	</tr>
	<tr class="alternate">
		<td>5</td>
		<td>0</td>
		<td>Tom</td>
		<td>$1.93</td>
	</tr>
	<tr>
		<td>6</td>
		<td>1</td>
		<td>Jake</td>
		<td>$0.93</td>
	</tr>
	<tr class="alternate">
		<td>7</td>
		<td>2</td>
		<td>Greg</td>
		<td>$1.53</td>
	</tr>
	<tr>
		<td>8</td>
		<td>3</td>
		<td>Bill</td>
		<td>$1.73</td>
	</tr>
	<tr class="alternate">
		<td>9</td>
		<td>4</td>
		<td>Joe</td>
		<td>$0.63</td>
	</tr>
	<tr>
		<td>10</td>
		<td>0</td>
		<td>Bob</td>
		<td>$1.73</td>
	</tr>
	<tr class="alternate">
		<td>11</td>
		<td>1</td>
		<td>Matt</td>
		<td>$0.63</td>
	</tr>
	<tr>
		<td>12</td>
		<td>2</td>
		<td>Mark</td>
		<td>$1.23</td>
	</tr>
	<tr class="alternate">
		<td>13</td>
		<td>3</td>
		<td>Tom</td>
		<td>$0.63</td>
	</tr>
	<tr>
		<td>14</td>
		<td>4</td>
		<td>Jake</td>
		<td>$1.43</td>
	</tr>
	<tr class="alternate">
		<td>15</td>
		<td>0</td>
		<td>Greg</td>
		<td>$1.63</td>
	</tr>
	<tr>
		<td>16</td>
		<td>1</td>
		<td>Bill</td>
		<td>$0.93</td>
	</tr>
	<tr class="alternate">
		<td>17</td>
		<td>2</td>
		<td>Joe</td>
		<td>$1.53</td>
	</tr>
	<tr>
		<td>18</td>
		<td>3</td>
		<td>Bob</td>
		<td>$1.53</td>
	</tr>
	<tr class="alternate">
		<td>19</td>
		<td>4</td>
		<td>Matt</td>
		<td>$1.73</td>
	</tr>
	<tr>
		<td>20</td>
		<td>0</td>
		<td>Mark</td>
		<td>$1.63</td>
	</tr>
	<tr class="alternate">
		<td>21</td>
		<td>1</td>
		<td>Tom</td>
		<td>$0.73</td>
	</tr>
	<tr>
		<td>22</td>
		<td>2</td>
		<td>Jake</td>
		<td>$1.43</td>
	</tr>
	<tr class="alternate">
		<td>23</td>
		<td>3</td>
		<td>Greg</td>
		<td>$1.23</td>
	</tr>
	<tr>
		<td>24</td>
		<td>4</td>
		<td>Bill</td>
		<td>$0.23</td>
	</tr>
	<tr class="alternate">
		<td>25</td>
		<td>0</td>
		<td>Joe</td>
		<td>$1.03</td>
	</tr>
	<tr>
		<td>26</td>
		<td>1</td>
		<td>Bob</td>
		<td>$0.53</td>
	</tr>
	<tr class="alternate">
		<td>27</td>
		<td>2</td>
		<td>Matt</td>
		<td>$0.73</td>
	</tr>
	<tr>
		<td>28</td>
		<td>3</td>
		<td>Mark</td>
		<td>$0.03</td>
	</tr>
	<tr class="alternate">
		<td>29</td>
		<td>4</td>
		<td>Tom</td>
		<td>$1.03</td>
	</tr>
	<tr>
		<td>30</td>
		<td>0</td>
		<td>Jake</td>
		<td>$1.63</td>
	</tr>
	<tr class="alternate">
		<td>31</td>
		<td>1</td>
		<td>Greg</td>
		<td>$1.03</td>
	</tr>
	<tr>
		<td>32</td>
		<td>2</td>
		<td>Bill</td>
		<td>$0.83</td>
	</tr>
	<tr class="alternate">
		<td>33</td>
		<td>3</td>
		<td>Joe</td>
		<td>$1.33</td>
	</tr>
	<tr>
		<td>34</td>
		<td>4</td>
		<td>Bob</td>
		<td>$0.43</td>
	</tr>
</tbody>
</table>
