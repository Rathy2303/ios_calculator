var num1;
var num2;
var num;
var result;
let op = "";
var txtResult=document.getElementById('txtdislay');
var btnsum = document.getElementById('btnsum');
var btnsub = document.getElementById('btnsub');
var btnmul = document.getElementById('btnMul');
var btndiv = document.getElementById('btnDiv');
var btnres = document.getElementById('btnResult');
var btnAc = document.getElementById('btnAC');
var isDot = false;
var isnotnull = false;
var count = 0;

function btnClick(val){
    count++;
    isnotnull = true;
    if(count <= 10){
        if(isnotnull == true)
            btnAc.innerHTML = "C";
        else
            btnAc.innerHTML = "AC";

        if(txtResult.value == "-0"){
            txtResult.value = "";
            txtResult.value+='-';
        }
        
        if(txtResult.value == 0)
            txtResult.value = "";
        if(txtResult.value == num1)
            txtResult.value = "";
        txtResult.value +=val;
    }
}
function clearTxt(){
    count=0;
    isnotnull = false;
    btnAc.innerHTML = "AC";
    isDot = false;
    txtResult.value = 0;
}

function btnZero(){
    if(txtResult.value == 0)
        txtResult.value = 0;
    else{
        if(txtResult.value == num1){
            txtResult.value = "";
            txtResult.value +=0;
        }else
            txtResult.value +=0;
        
    }
       
}

function btnSumnSub(){
    var orgVal =  txtResult.value;
    var val = orgVal.slice(0,0)+'-'+orgVal.slice(0);
    txtResult.value = val;
}

function btnOperator(sign){
    count=0;
    isDot = false;
    num1 = parseFloat(txtResult.value);
    op = sign;
    changebtnBack(sign);
}

function btnPercent(){
    num1 = parseFloat(txtResult.value);
    result = num1 / 100;
    txtResult.value = result;
}

function changebtnBack(sign){
    if(sign == "+"){
        btnsum.style.backgroundColor = "white";
        btnsum.style.color = "#FE9505";
    }
        
    else if(sign == "-"){
        btnsub.style.backgroundColor = "white";
        btnsub.style.color = "#FE9505";
    }
    else if(sign == "X"){
        btnmul.style.backgroundColor = "white";
        btnmul.style.color = "#FE9505";
    }
    else if(sign == "/"){
        btndiv.style.backgroundColor = "white";
        btndiv.style.color = "#FE9505";
    }
    else if(sign == "="){
        btnsum.style.backgroundColor = "#FE9505";
        btnsum.style.color = "white";
        btnsub.style.backgroundColor = "#FE9505";
        btnsub.style.color = "white";
        btnmul.style.backgroundColor = "#FE9505";
        btnmul.style.color = "white";
        btndiv.style.backgroundColor = "#FE9505";
        btndiv.style.color = "white";

    }
    else if(sign == "C"){
        btnres.style.backgroundColor = "white";

    }
}

function btnDot(){
    if(isDot == false){
        txtResult.value+='.';
        isDot=true;
    }
        
}

function btnResult(){
    changebtnBack('=');
    num2 = parseFloat(txtResult.value);
    switch(op){
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "X":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
    }
    txtResult.value = result.toPrecision(9);
}
//Button Variable
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn3 = document.getElementById('btn3');
var btn2 = document.getElementById('btn2');
var btn1 = document.getElementById('btn1');
var btn0 = document.getElementById('btnZero');
var btndot = document.getElementById('btndot');
var btndel = document.getElementById('btndel');

document.addEventListener("keydown",(en)=>{
    if(en.key === '7'){
        btnClick(7);
        btn7.style.background = "#C1C1C1";
    }
        
    else if(en.key === '8')
    {
        btnClick(8);
        btn8.style.background = "#C1C1C1";
    }  
    else if(en.key === '9')
    {
        btnClick(9);
        btn9.style.background = "#C1C1C1";
    }
    else if(en.key === '4'){
        btnClick(4);
        btn4.style.background = "#C1C1C1";
    }
       
    else if(en.key === '5'){
        btnClick(5);
        btn5.style.background = "#C1C1C1";
    }
        
    else if(en.key === '6'){
        btnClick(6);
        btn6.style.background = "#C1C1C1";
    }
        
    else if(en.key === '1'){
        btnClick(1);
        btn1.style.background = "#C1C1C1";
    }
        
    else if(en.key === '2'){
        btnClick(2);
        btn2.style.background = "#C1C1C1";
    }
        
    else if(en.key === '3'){
        btnClick(3);
        btn3.style.background = "#C1C1C1";
    }
       
    else if(en.key === '0')
    {
        btnClick(0);
        btn0.style.background = "#C1C1C1";
    }
       
    if(en.keyCode == 190){
        btnClick('.');
        btndot.style.background = "#C1C1C1";
    }
        
    if(en.shiftKey && en.key == '+')
        btnOperator('+');
    else if(en.shiftKey && en.key == '*')
        btnOperator('X');
    else if(en.shiftKey && en.key == '%')
        btnPercent();
    if(en.key == '=')
    {
        sign = '=';
        btnResult();
    }
    else if(en.key == '-')
        btnOperator('-');
    else if(en.key == '/')
        btnOperator('/');
    else if(en.key == 'Delete'){
        clearTxt();
        btnAc.style.background = "#C1C1C1";
    }
        

})
document.addEventListener('keyup',(en)=>{
    if(en.key === '7'){
        btn7.style.background = "#333333";
    }
        
    else if(en.key === '8')
    {
        btn8.style.background = "#333333";
    }  
    else if(en.key === '9')
    {
        btn9.style.background = "#333333";
    }
    else if(en.key === '4'){
        btn4.style.background = "#333333";
    }
       
    else if(en.key === '5'){
        btn5.style.background = "#333333";
    }
        
    else if(en.key === '6'){

        btn6.style.background = "#333333";
    }
        
    else if(en.key === '1'){
        btn1.style.background = "#333333";
    }
        
    else if(en.key === '2'){
        btn2.style.background = "#333333";
    }
        
    else if(en.key === '3'){
        btn3.style.background = "#333333";
    }
       
    else if(en.key === '0')
    {
        btn0.style.background = "#333333";
    }
       
    if(en.keyCode == 190){
        btndot.style.background = "#333333";
    }
    if(en.key == 'Delete'){
        btnAc.style.background = "#A5A5A5";
    }
})