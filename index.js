function input(value){
    document.getElementById('display').value+=value;
}
function clearinput(){
    document.getElementById('display').value="";
}
function delinput(){
    document.getElementById('display').value=document.getElementById('display').value.toString().slice(0,-1);
}
function Result(){
    const a =document.getElementById('display').value;
    
    try{
        const r= eval(a);
        document.getElementById('display').value=r;
    }
    catch(error){
        document.getElementById('display').value='Error';

    }
}