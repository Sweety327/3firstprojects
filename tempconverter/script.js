const calculatetemp=()=>{
    const tempval=document.getElementById('temp').value;
    console.log(tempval);
    const tempSelect=document.getElementById('tempopt');
    const value=tempopt.options[tempSelect.selectedIndex].value;

    const celToFah=(cel)=>{
        let fahrenheit=Math.round((cel * 9/5)+32);
        return fahrenheit;
    }
    const fahToCel=(fahr)=>{
        let celsius=Math.round((fahr-32)*5/9);
        return celsius;
    }

    let result;

    if(value=='cel')
    {
        result=celToFah(tempval);
        document.getElementById('resultcontainer').innerHTML=result+" fahrenheits";
    }
    else{
        result=fahToCel(tempval);
        document.getElementById('resultcontainer').innerHTML=result+" celsius";
    
    }

}