let nomInput = document.getElementById("nomdesociete");
let phoneInput = document.getElementById("phone");
var letters = /^[A-Za-z]+$/;

var errors= true;
function nameValidation() {
    
    if (nomInput.value.length < 3) {
        var nomError = " Le nom doit compter au minimum 3 caractères.";
        document.getElementById("nomEr").innerHTML = nomError;
        errors =false ;
        return false;
    }
    if (!nomInput.value.match(letters) && !nomInput.value.match(/[0-9]/g) ) {
        var nomError2 = "Veuillez entrer un nom valid ! (seulement des lettres et number)";
        
        document.getElementById("nomEr").innerHTML = nomError2;
        errors =false ;
        return false;
    }
    document.getElementById("nomEr").innerHTML = "<p style='color:green'> Correct </p>";
    
    return true;
}

function phoneValidation(){

if (phoneInput.value.match(letters)) {
    document.getElementById("phoneEr").innerHTML ="Le numéro ne doit pas contenir des lettres";
    errors =false ;
    return false; 
}else if (phoneInput.value.length==0){
    document.getElementById("phoneEr").innerHTML ="numéro vide"; 
    errors =false ;
}
 else {
    document.getElementById("phoneEr").innerHTML = "<p style='color:green'> Correct </p>";
    
    return true;
}
}

function rdvValidation(){
    var time = document.getElementById("time").value;
    var hours = time.slice(0, 2);
    
    if(time ==""){
        document.getElementById("RDVEr").innerHTML ="vide";
        errors = false;
    }

    
    else if(hours >= 9 && hours <= 17){
        document.getElementById("RDVEr").innerHTML ="<p style='color:green'> disponible </p>"; 
        
    }
    else{
        document.getElementById("RDVEr").innerHTML ="indisponible"; 
        errors =false ;
    }


}


function verification(){
    phoneValidation()
    nameValidation()
    
    if (document.getElementById("email").value.length==0){
        document.getElementById("emailEr").innerHTML ="email vide";
        errors =false ; 
    }
    else if(!document.getElementById("email").value.match("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")){
        document.getElementById("emailEr").innerHTML ="email invalid"; 
        errors =false ; 
    }else{
        document.getElementById("emailEr").innerHTML = "<p style='color:green'> Correct </p>";
        
    }
    rdvValidation()

    if (document.getElementById("vide").value== ""){
        document.getElementById("paysEr").innerHTML ="pays vide"; 
        errors =false ;
    }else{
        document.getElementById("paysEr").innerHTML = "<p style='color:green'> Correct </p>";
        
    }
  
    
    if (errors === false) {
        alert("vérfier votre demande");
    } else {
        alert("demande envoyée");
    } 
    errors= true;
}








