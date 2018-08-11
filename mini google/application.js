var doe="" ;
var theStudent ;
var text=document.getElementById("search-name");
var file=document.getElementById("send-name");



function right(theStudent){

    var submit="<p>Name: " + theStudent.name +"</p>" ;
   submit += "<p>Course: "+ theStudent.course+"</p>" ;
   submit +=  "<p>Result: " + theStudent.result + "</p>";
   submit +="<p>Gpa: " + theStudent.gpa +"</p>";
   submit +="<p>Grade: " + theStudent.grade + "</p>";
return submit;
}


function read(doe){ 
    var play= document.getElementById("back");
    play.innerHTML=doe;
}

function getStudents(e){
       e.preventDefault();
       var hint=text.value;
        for(var i=0; i<students.length; i++){
            theStudent = students[i];
                if(hint===theStudent.name){
                doe= right(theStudent);
                read(doe);
                }

        }
   }

   
   file.addEventListener("click", getStudents);
