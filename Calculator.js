function calc(){
    //grab values from the form
    //calc them
    //output them to the website
    //DOM - element from current website
    //creating a variable to use for the DOM
    //"value" is  a string and we neet to convert it
    //we use .notion to pull info from our html over
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
        //operator is already a string, don't convert
    var op = (document.querySelector("#operator").value);
    var calculate;

    if (op =="add"){
        calculate = a+b;

    } else if(op =="min"){
        calculate = a+b;
    }else if(op =="div"){
        calculate = a+b;
    }else if(op =="mul"){
        calculate = a+b;
    }
}