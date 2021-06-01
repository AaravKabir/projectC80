function getParagraph1(){
    var inputs = [];
    for(var i = 1 ; i <=6 ; i++) 
    {
        inputs.push(document.getElementById("paral_input_box_" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}
function getParagraph2(){
    var inputs2 = [];
    for(var k = 7 ; k <=12 ; k++) 
    {
        inputs2.push(document.getElementById("paral_input_box_" + k).value);
    }
    document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
}