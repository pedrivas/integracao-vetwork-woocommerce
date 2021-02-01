var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
var especiais=["Dez","Onze", "Doze", "Treze", "Catorze", "Quinze", "Dezeseis", "Dezsete", "Dezoito", "Deznove"]; 
var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
var centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
let soma = 0
for (n=1;n<=1000;n++){
  //Valores com 1 algarismo
  n = n.toString();
  if(n.length === 1) {
    //Imprimir unidadades
    soma += (unidades[parseInt(n[0])]).length;
  }	

  //Valores com 2 algarismos
  else if(n.length === 2) {
    //Especiais
    if((n[0]=='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
      soma += (especiais[parseInt(n[1])]).length;
    }
    
    //Dezenas
    else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
      soma += (dezenas[parseInt(n[0]-2)]).length;
    }

    //Dezenas compostas
    else {
      soma += (dezenas[parseInt(n[0]-2)]+" e "+unidades[parseInt(n[1])]).length;
    }
  }

  //Valores com 3 algarimos
  else if (n.length === 3) {
    //Centenas inteiras
    if ((n[0]=='1'||n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='0' && n[2]=='0')) {
      soma += (centenas[parseInt(n[0]-1)]).length
    }

    //Centenas + números especiais
    else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='1') && ((n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9'))) {
      soma += (centenas[parseInt(n[0]-1)]+" e "+especiais[parseInt(n[2])]).length
    }

    //Centenas + Nº Compostos
    else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]!='1')) {
      soma += (centenas[parseInt(n[0]-1)]+" e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]).length;
    }

    //Cento + Nº Especiais
    else if ((n[0]=='1') && (n[1]=='1') && (n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9')) {
      soma += ("Cento e "+especiais[parseInt(n[2])]).length
    }

    //Cento + Nº Compostos
    else if ((n[0]=='1') && (n[1]!='1') && (n[2]!='0')) {
      soma += ("Cento e "+dezenas[parseInt(n[1]-2)]+" e "+unidades[parseInt(n[2])]).length;
    }
  }
}
console.log(soma);