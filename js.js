function ExportToExcel(type, fn, dl) 
{
    //Get values from inputs to table
    document.getElementById("td1").innerHTML = document.getElementById("inputEmail3").value;
    document.getElementById("td2").innerHTML = document.getElementById("inputPassword3").value;
    
    var elt = document.getElementById('tbl');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
    XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }) :
    XLSX.writeFile(wb, fn || ('your information.' + (type || 'xlsx')));
}