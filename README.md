# excelExport

Export your HTML tables to Excel format.

### Doc

* **Installation**

Simply import JQuery & excel-export into your HTML.
```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://unpkg.com/jquery-excel-exporter@1.2.0/excel-export.min.js"></script>	
```
* **How to use**
Select your table(s) with a JQuery selector.
```
$('table').excelExport();
```
* **Options**
```
{
    toRemove: ['a','div','img','input'], //Selectors to remove before exporting
    title: 'Exported_Table' //File name
}
```
* **Example**
```
$('table').excelExport({
  toRemove: ['a.hidden','div'],
  title: "Table_Test"
});
```

## Authors

* **Zenoo** - *Initial work* - [Zenoo.fr](http://zenoo.fr)
