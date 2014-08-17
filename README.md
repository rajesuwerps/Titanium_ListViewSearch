List View Search
================

This is an Appcelerator Titanium sample on ListView Search. This shows one way to implement searching the list by more than one property of the data- i.e. display the name, but searchable by all of name, code, alias etc. This is implemented using `ListView`, leveraging the `searchableText` property of the `ListItem`. 

Using the `SearchBar` is one way to search the ListView. When we type the text in the SearchBar, the list is automatically filtered for us- we don't code anything explicitly to filter the list.

The search is performed on the text set to searchableText (`searchText` is ignored in this case). The `title` property of the ListItem shown is not searched either. Only searchableText is used to perform the search. We can set the searchableText to include everything we want to search on.

This example lists airport names. But the searchableText includes both the name and the 3 letter airport code and we can now search by name as well as the code. Below is an example.

`<ListItem title="Cozumel International" searchableText="Cozumel International CZM" />`

Since text in title property is not searched up, it is included in the searchableText too. So we can search on what's displayed (airport name) and what's not (airport code).

This enables us to search by text/alias/codes that may not be typically displayed in the list. This also eliminates the need to have a separate look up just for search.

