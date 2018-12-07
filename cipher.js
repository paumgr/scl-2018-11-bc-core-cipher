
window.cipher = {
   encode: (cifrar , number) => {
    let encriptar = "";
    for (let i=0; i<cifrar.length; i++){
      let ascii_mensaje= cifrar.charCodeAt(i);
      if(ascii_mensaje >= 65 && ascii_mensaje <=90){
          ascii_mensaje = ((ascii_mensaje - 65 + number) % 26) + 65;
      }
      encriptar = encriptar + String.fromCharCode(ascii_mensaje);
     }
     return encriptar;

}, 


  decode: (decifrar , numbers) => {
    let decifrando = "";
    for (let i=0; i<decifrar.length; i++){
      let ascii = decifrar.charCodeAt(i);
      let asciiTransformado = ((ascii - 65 - numbers) % 26 + 65);
      if (decifrar[i]== " "){
        decifrando = decifrando + " ";
    }else if((ascii - 65 - numbers) >= 0  ){
        decifrando = decifrando + String.fromCharCode(asciiTransformado);
      }else{
        asciiTransformado = asciiTransformado + 26;
        decifrando = decifrando + String.fromCharCode(asciiTransformado);
      }
    }
    return decifrando;
 }

}