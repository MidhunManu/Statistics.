function result(){
    let =payment = document.getElementById("pay").value;
    let tipAmount = document.getElementById("tip").value 
    // let result = ((Number(tipAmount) /  Number(payment)) * 100).toFixed(1);

    // let total = document.getElementById("total").value;

    // let totalbill = payment + tipAmount;
    // document.getElementById("total") = totalbill;
    let result = ((Number(payment) * Number(tipAmount)) / 100).toFixed(1);
    document.getElementById("satn").innerHTML = ("$"+result);

    if(tipAmount > 0 && tipAmount < 10){
        document.getElementById("res").innerHTML = "satisfactory service";
        document.getElementById("res").style = "color:orange;";
    }
    else if(tipAmount >= 10 && tipAmount < 20){
        document.getElementById("res").innerHTML = "nice service";
        document.getElementById("res").style = "color:yellow;";
    }
    else if(tipAmount >= 20 && tipAmount < 30){
        document.getElementById("res").innerHTML = "good service";
        document.getElementById("res").style = "color:lightgreen;";
    }
    else if(tipAmount >= 30){
        document.getElementById("res").innerHTML = "awesome service";
        document.getElementById("res").style = "color:darkgreen;";
    }

    else {
        document.getElementById("res").innerHTML = "bad service , no tip";
        document.getElementById("res").style = "color:red;";
    }
}