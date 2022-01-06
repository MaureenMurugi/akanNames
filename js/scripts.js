function akanNames(e) {
    e.preventDefault();
    // Variable declaration

    var cc = document.getElementById('century').value;
    var yy = document.getElementById('year').value;
    var mm = document.getElementById('month').value;
    var dd = document.getElementById('date').value;
    var gender = document.getElementById('dot-1').value;
    var gender = document.getElementById('dot-2').value;

    // Validation

    if (cc == '' || cc < 19 || cc > 21) {
        alert('Input a valid century');
        return false;
    }
    if (yy == '' || yy.length > 4 || yy.length < 4) {
        alert('Input valid year');
        return false;
    }
    if (mm == '' || mm <= 0 || mm > 12) {
        alert('Input a valid month');
        return false;
    }
    if (dd == '' || dd <= 0 || dd > 31) {
        alert('Input a valid day');
        return false;
    }

    var d = Math.floor(((((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7));
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const femaleName = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
    const maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];

    if(d==0 && gender=='dot-1'){
        alert("Hey, Your Akan name is : "=dot-1[0]+ "\n and you were born on: "+days[0])
        return false;
    }
    if(d==1 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[1]+ "\n and you were born on: "+days[1])
        return false;
    }
    if(d==2 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[2]+ "\n and you were born on: "+days[2])
        return false;
    }
    if(d==3 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[3]+ "\n and you were born on: "+days[3])
        return false;
    }
    if(d==4 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[4]+ "\n and you were born on: "+days[4])
        return false;
    }
    if(d==5 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[5]+ "\n and you were born on: "+days[5])
        return false;
    }
    if(d==6 && gender=='dot-1'){
        window.alert("Hey, Your Akan name is : "=dot-1[6]+ "\n and you were born on: "+days[6])
        return false;
    }
    if(d==0 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[0]+ "\n and you were born on: "+days[0])
        return false;
    }
    if(d==1 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[1]+ "\n and you were born on: "+days[1])
        return false;
    }
    if(d==2 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[2]+ "\n and you were born on: "+days[2])
        return false;
    }
    if(d==3 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[3]+ "\n and you were born on: "+days[3])
        return false;
    }
    if(d==4 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[4]+ "\n and you were born on: "+days[4])
        return false;
    }
    if(d==5 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[5]+ "\n and you were born on: "+days[5])
        return false;
    }
    if(d==6 && gender=='dot-2'){
        window.alert("Hey, Your Akan name is : "=dot-2[6]+ "\n and you were born on: "+days[6])
        return false;
    }


}