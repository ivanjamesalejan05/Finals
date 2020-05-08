
function myfunction()
{
    
    var y = document.getElementById("filename").value;
    var path = document.getElementById("fileholder").value;
    var filename =  path.replace(/^.*[\\\/]/, '');
    // Create anchor element. 
    var a = document.createElement('a');  
      

    // Create the text node for anchor element. 
    var link = document.createTextNode(y); 
      
    // Append the text node to anchor element. 
    a.appendChild(link);  
      
    // Set the title. 
    a.title = y;  
      
    // Set the href property. 

    a.href = filename;  
      
    var dis = document.getElementById("discription").value;
    var tp = document.getElementById("topic").value;
    var ds = document.getElementById("datesubmit").value;
   
    var table = document.getElementById("directory");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    
    cell1.appendChild(a);
    cell2.innerHTML = dis;
    cell3.innerHTML = tp;
    cell4.innerHTML = ds;
}
