function akanNames(e) {
    e.preventDefault();
// Variable declaration

    var cc=document.getElementById('century').value;
    var yy=document.getElementById('year').value;
    var mm=document.getElementById('month').value;
    var dd=document.getElementById('date').value;
    var gender=document.getElementById('dot-1').value;
    var gender=document.getElementById('dot-2').value;
// Validation

    if(cc ==''|| cc<19||cc>21) {
        alert('Input a valid century');
        return false;
    }
    if(yy ==''|| yy.length>4 || yy.length<4) {
        alert('Input valid year');
        return false;
    }
    if(mm ==''|| mm<=0 || mm>12) {
        alert('Input a valid month');
        return false;
    }
    if(dd == ''|| dd<=0 || dd>31) {
        alert('Input a valid day');
        return false;
    }


}





