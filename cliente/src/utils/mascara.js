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

    
    if (v.length === 7 && /^[A-Z]{3}[0-9]{4}$/.test(v)) {
        return v.replace(/^([A-Z]{3})(\d{4})$/, "$1-$2");
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

export function formatarRG(valor) {
    // Remove tudo que não é número ou a letra X
    valor = valor.replace(/[^0-9xX]/g, "").toUpperCase();

    // Limita ao máximo de 9 caracteres numéricos
    valor = valor.substring(0, 9);

    const qtd = valor.length;

    // RG com 7 dígitos (Ex: 0-000.000)
    if (qtd <= 7) {
        return valor
            .replace(/(\d{1})(\d)/, "$1-$2")
            .replace(/(\d{1})-(\d{3})(\d)/, "$1.$2.$3");
    } 
    
    // RG com 8 dígitos (Ex: 00.000.000)
    else if (qtd === 8) {
        return valor
            .replace(/(\d{2})(\d)/, "$1.$2")
            .replace(/(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    } 
    
    // RG com 9 dígitos (Ex: 00.000.000-0)
    else {
        return valor
            .replace(/^(\d{2})(\d)/, "$1.$2")
            .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
            .replace(/(\d{3})([\dX])$/, "$1-$2");
    }
}

export function formatarCEP(valor) {
    valor = valor.replace(/\D/g, "");

    // Limita a 8 dígitos
    valor = valor.substring(0, 8);

    return valor
        .replace(/(\d{5})(\d)/, "$1-$2");
}

export function formatarUF(valor) {
    // Remove qualquer coisa que não seja letra
    valor = valor.replace(/[^a-zA-Z]/g, "");

    // Transforma em maiúsculo e limita a 2 caracteres
    return valor.toUpperCase().substring(0, 2);
}