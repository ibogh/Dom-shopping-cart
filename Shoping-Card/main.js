function color1() {
    if (document.getElementById("heart1").style.color == "red"){
        document.getElementById("heart1").style.color = "black"
    }
    else{
        document.getElementById("heart1").style.color = "red";
    }
}
function color2() {
    if (document.getElementById("heart2").style.color == "red"){
        document.getElementById("heart2").style.color = "black"
    }
    else{
        document.getElementById("heart2").style.color = "red";
    }
}
function color3() {
    if (document.getElementById("heart3").style.color == "red"){
        document.getElementById("heart3").style.color = "black"
    }
    else{
        document.getElementById("heart3").style.color = "red";
    }
}
function plus1() {
    var i = document.getElementById('iphone-button').value;
    document.getElementById('iphone-button').value = ++i;
    price1()
    pricetotal() 
}
function plus2() {
    var i = document.getElementById('shoes-button').value;
    document.getElementById('shoes-button').value = ++i;
    price2()
    pricetotal() 
}
function plus3() {
    var i = document.getElementById('watch-button').value;
    document.getElementById('watch-button').value = ++i;
    price3()
    pricetotal() 
}
function minus1() {
    var i = document.getElementById('iphone-button').value;
    
    if (i>0){
        document.getElementById('iphone-button').value = --i;
        price1()
        pricetotal() 
    }
}
function minus2() {
    var i = document.getElementById('shoes-button').value;
    if (i>0){
        document.getElementById('shoes-button').value = --i;
        price2()
        pricetotal() 
    }
}
function minus3() {
    var i = document.getElementById('watch-button').value;
    if (i>0){
        document.getElementById('watch-button').value = --i;
        price3()
        pricetotal() 
    }
}
function price1() {
    var i = document.getElementById('iphone-button').value;
    var price = 1379.00;
    var priceiphone = i * price;
    document.getElementById('1').textContent = priceiphone.toFixed(2);

}
function price2() {
    var i = document.getElementById('shoes-button').value;
    var price = 176.80;
    var priceshoes = i * price;
    document.getElementById('2').textContent = priceshoes.toFixed(2);

}
function price3() {
    var i = document.getElementById('watch-button').value;
    var price = 249.00;
    var pricewatch = i * price;
    document.getElementById('3').textContent = pricewatch.toFixed(2);

}

function pricetotal() {
var priceiphone=parseFloat(document.getElementById("1").innerHTML);
var priceshoes =parseFloat(document.getElementById("2").innerHTML);
var pricewatch =parseFloat(document.getElementById("3").innerHTML);
    document.getElementById('finalPrice').value = priceiphone + pricewatch + priceshoes;
    console.log(priceiphone,pricewatch,priceshoes);
}
function dltobj1() {
    var myobj = document.getElementById("obj1");
    myobj.remove();
    pricetotal()
}
function dltobj2() {
    var myobj = document.getElementById("obj2");
    myobj.remove();
    pricetotal()
}
function dltobj3() {
    var myobj = document.getElementById("obj3");
    myobj.remove();
    pricetotal()
    
}