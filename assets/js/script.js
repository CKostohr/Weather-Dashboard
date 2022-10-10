var APIKey = "90a5a0fd17c8d2e0dfa9c4cd8c6be0cd";
var magicBtn = "";
$(document).ready(function(){
    var city =$("#city").val();
    if (!isNaN(city)){
        magicBtn = "zip"
    }else{
        magicBtn = "q"
    }
})
