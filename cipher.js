
window.cipher = {
   encode: (cifrar , number) => {
    let encriptar = "";
    for (let i=0; i<cifrar.length; i++){
      let ascii_mensaje= cifrar.charCodeAt(i);

      if(cifrar[i] == " "){
        encriptar = encriptar + " ";
      }else if(ascii_mensaje >= 65 && ascii_mensaje <=90){
          ascii_mensaje = ((ascii_mensaje - 65 + number) % 26) + 65;
          
      encriptar = encriptar + String.fromCharCode(ascii_mensaje);
    }

     if(ascii_mensaje >= 48 && ascii_mensaje <= 57) {
      ascii_mensaje = ((ascii_mensaje - 48 + number) % 10) + 48;
  
     encriptar = encriptar + String.fromCharCode(ascii_mensaje);
     }

     if(ascii_mensaje >= 97 && ascii_mensaje <= 122) {
      ascii_mensaje = ((ascii_mensaje - 97 + number) % 26) + 97;
  
     encriptar = encriptar + String.fromCharCode(ascii_mensaje);
     }
 }
     return encriptar;

}, 


  decode: (decifrar , numbers) => {
    let decifrando = "";
    for (let i=0; i<decifrar.length; i++){
      let ascii_mensaje = decifrar.charCodeAt(i);
     if(decifrar[i] == " "){
       decifrando = decifrando + " ";
     }else if(ascii_mensaje >=65 && ascii_mensaje <=90){
          ascii_mensaje = ((ascii_mensaje - 65 - numbers + 26) % 26)+65;
      decifrando = decifrando + String.fromCharCode(ascii_mensaje);
    }
    if(ascii_mensaje >=48 && ascii_mensaje <=57){
      ascii_mensaje =((ascii_mensaje - 57 - numbers )%10) +57;
    decifrando = decifrando + String.fromCharCode(ascii_mensaje);
    }
    if(ascii_mensaje >=97 && ascii_mensaje <=122){
      ascii_mensaje =((ascii_mensaje - 97 - numbers )%26) +97;
    decifrando = decifrando + String.fromCharCode(ascii_mensaje);
    }
   }
    return decifrando;
  }
};