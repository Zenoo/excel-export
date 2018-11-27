(function($){
    $.fn.extend({
        excelExport: function(options) {
            this.defaultOptions = {
                toRemove: ['a','div','img','input'],
                title: 'Exported_Table'
            };

			let settings = $.extend({}, this.defaultOptions, options);

            //MULTIPLE OBJECTS HANDLER
            return this.each(function() {
				let tab_text = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border="2px"><tr bgcolor="#87AFC6">';

				let that = $(this).clone();
				for(let tag of settings.toRemove) $(tag, that).remove();
				for(let row of this.rows) tab_text += `<tr>
					${Array.from(row.children).map(cell => `
						<td>
							${Array.from(cell.childNodes).map(e => e.innerText || e.textContent).join(' ')}
						</td>
					`).join('')}
				</tr>`;

				tab_text = tab_text + "</table></body></html>";
				tab_text = tab_text.replace(/\./g, ","); //Numbers fix
				console.log(tab_text);

				var a = document.createElement('a');
				a.href = 'data:application/vnd.ms-excel;base64,' + window.btoa(unescape(encodeURIComponent(tab_text)));
				a.download = settings.title + '.xls';
				a.click();
            });
        }
    });
})(jQuery);