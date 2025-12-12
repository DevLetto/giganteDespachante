import { replace } from "react-router-dom";

export function formatarCpfCnpj(valor){
    valor = valor.replace(/\D/g, "");

    if(valor.length <= 11){
        return valor
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }else {
        
        valor = valor.substring(0, 14)

        return valor
            .replace(/^(\d{2})(\d)/, "$1.$2") 
            .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3") 
            .replace(/\.(\d{3})(\d)/, ".$1/$2")
            .replace(/(\d{4})(\d)/, "$1-$2");
    }
}

export function formatarTelefone(valor){
    valor = valor.replace(/\D/g, "")

    return valor
        .replace(/(\d{2})(\d)/, "($1)$2")
        .replace(/(\d{5})(\d{4})/, "$1-$2")
}


export function formatarPlaca(valor) {
    
    let v = valor.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();

    
    v = v.substring(0, 7);

  

    if (v.length >= 4) {
        v = v.replace(/^([A-Z]{3})([0-9A-Z]+)/, '$1-$2');
    }


    if (v.length === 8) { 
        v = v.split('').map((char, index) => {
            if (index === 4) {
                return isNaN(parseInt(char)) ? char : '0';
            }
            return char;
        }).join('');
    }
    
    
    return v;
}

export function formatarAno(valor){
    valor = valor.replace(/\D/g, "")

    return valor

}

export function formatarChassi(valor) {
    let v = valor.replace(/[^a-zA-Z0-9]/g, "");

    v = v.replace(/[IOQ]/gi, ""); 

    v = v.toUpperCase();

    v = v.substring(0, 17);

    return v;
}