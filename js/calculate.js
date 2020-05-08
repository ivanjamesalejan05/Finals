function mycalculate(){
    var a = parseFloat(document.getElementById("rating").value);
    var b = parseFloat(document.getElementById("rating1").value);
    var c = parseFloat(document.getElementById("rating2").value);
    var d = parseFloat(document.getElementById("rating3").value);
    var e = parseFloat(document.getElementById("rating4").value);
    var f = parseFloat(document.getElementById("rating5").value);
    var g = parseFloat(document.getElementById("rating6").value);
    var h = parseFloat(document.getElementById("rating7").value);
    var i = parseFloat(document.getElementById("rating8").value);
    var j = parseFloat(document.getElementById("rating9").value);
    var partial = a+b+c+d+e+f+g+h+i+j;
    if(a==0||b==0||c==0||d==0||e==0||f==0||g==0||h==0||i==0||j==0){
        alert('Please select a score from each required item.')
    }
    else{
        var total =(partial/60)*100;
        var totalfinal = total.toFixed(2);

        if(totalfinal<61){
            alert('Your average score is ' +totalfinal+' % - Poor');
        }
        if(totalfinal<71&&totalfinal>60){
            alert('Your average score is ' +totalfinal+' % - Needs Improve');
        }
        if(totalfinal>70&&totalfinal<81){
            alert('Your average score is ' +totalfinal+' % - Average');
        }
        if(totalfinal>80&&totalfinal<91){
            alert('Your average score is ' +totalfinal+' % - Good');
        }
        if(totalfinal>90){
            alert('Your average score is ' +totalfinal+' % - Exellent');
        }
    }

}
