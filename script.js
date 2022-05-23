function action(){

        var newTable= document.getElementById("TheTable")

    let name= document.getElementById("ProductName").value;
    let  date = document.getElementById("TheDate").value;
    let amount = document.getElementById("theAmount").value;
          
  
        if (name != ""  &&  date !=""  && amount !=""){
            let addRow = newTable.insertRow(newTable.rows.length);

            let nameCell = addRow.insertCell(0);
            let dateCell = addRow.insertCell(1);
            let amountCell = addRow.insertCell(2);
            
            nameCell.innerHTML = name;
            dateCell.innerHTML = date;
            amountCell.innerHTML = amount;
           DONO();
        }

        else{
            alert ("Add the information")
        }
        document.getElementById("ProductName").value= '';
        document.getElementById("TheDate").value= '';
        document.getElementById("theAmount").value= '';
        
        
        
        /*let theTr = document.createElement('tr')
    let thetd = document.createElement('td')
    let input = document.querySelectorAll('input[type=text]')
    var t = document.createTextNode(input,);
    thetd.appendChild(theTr)
    theTr.appendChild(t);
   
    if(input === ''){
        alert("you must write something!");
    }
    else{
        document.getElementById('TheTable').appendChild(thetd);
    }
    document.getElementById('ProductName',"TheDate","theAmount").value= '';*/
  
}

    var selectedRowIndex;
    var newTable= document.getElementById("TheTable")

function DONO(){
    var newTableRowsLength = newTable.rows.length;
    for(var i=1; i<newTableRowsLength; i++){
        newTable.rows[i].onclick= function(){
            selectedRowIndex=this.rowIndex;
        
            document.getElementById("ProductName").value=this.cells[0].innerHTML;
            document.getElementById("TheDate").value=this.cells[1].innerHTML;
            document.getElementById("theAmount").value=this.cells[2].innerHTML;
        
        }
    }
}

function Edit(){

    let name= document.getElementById("ProductName").value;
    let  date = document.getElementById("TheDate").value;
    let amount = document.getElementById("theAmount").value;

        newTable.rows[selectedRowIndex].cells[0].innerHTML = name;
        newTable.rows[selectedRowIndex].cells[1].innerHTML = date;
        newTable.rows[selectedRowIndex].cells[2].innerHTML = amount;
        
}

function clar(){
        console.log("i'm working")
        document.getElementById("ProductName").value= '';
        document.getElementById("TheDate").value= '';
        document.getElementById("theAmount").value= '';
}
function ButDelete(){
  
        newTable.deleteRow(selectedRowIndex);
}