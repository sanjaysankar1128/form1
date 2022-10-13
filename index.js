var list =[]


$(document).ready(function () {
  
    $("#submitbtn").click(function () {

    let names = $("#names").val();
    if (names.length == "") {
       
        $("#error1").html(" You must enter your Name");

    } else {
        $("#error1").hide();

    }

    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let number = $("#number").val();
    if (number == "" || !phoneNum.test(number)) {
        
        $("#error2").html(" You must enter your Number");

    } else {
        $("#error2").hide();
    }

let regEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/g;
let email= $("#email").val();
if (email == "" || !regEmail.test(email)) {
    
    $("#error3").html(" You must enter your  Email!");

} else {
    $("#error3").hide();
}

let selectGender = [];
let selecting = "";
jQuery('input[name="Gender"]:checked').each(function(){
   selectGender.push($(this).val());
   selecting  = selectGender
   
});

if(selecting == ""){
    
    $("#error4").html(" Please Enter Your Email!");
}else{
    $("#error4").html("");
}


 let selectLang = new Array();
 let chec = jQuery(".checkbox:checked").length
 jQuery(".checkbox:checked").each(function(){ 
    selectLang.push($(this).val());
    
 });
 
 if(chec == "") {
       
    $("#error5").html(" Please Enter Your Full Name!");

} else {
    $("#error5").html("");
}


 let select = $("#status").val();
     if  (select == "") {
        
         $("#error6").html(" You must select your status ");
 
     } else {
         $("#error6").hide();
 
     }
 
     let adress = $("#textarea").val();
     if  (adress == "") {
        
         $("#error7").html(" You must enter your address");
 
     } else {
         $("#error7").hide();
 
     }
 
 
  let result = { "Name": names, "Number": number, "Email": email, "status": select,"Gender":selecting,"Language":selectLang,"Address": adress }
   
    
       

        if(names&&number&&email&&select&&selecting&&selectLang&&adress){
            list.push(result);
            console.log(result);
            localStorage.setItem("resultvalue",JSON.stringify(list))
            buildTable()
            console.log(result);
          
        }else{
            console.log("");
        }
 
        function buildTable() {
            let row ="";
            list = JSON.parse(localStorage.getItem("resultvalue"));
        
            for (var i = 0; i < list.length; i++) {
        
                row += `<tr>
                              <td>${list[i].Name}</td>
                              <td>${list[i].Number}</td>
                              <td>${list[i].Email}</td>
                              <td>${list[i].status}</td>
                              <td>${list[i].Gender}</td>
                              <td>${list[i].Language}</td>
                              <td>${list[i].Address}</td>
                        </tr>`
               
                      
            }
            document.getElementById("myTable").innerHTML = row
        
        }
  
  
});
    
document.querySelector("button").addEventListener("click" , (event)=>{
    event.preventDefault();
});


});
