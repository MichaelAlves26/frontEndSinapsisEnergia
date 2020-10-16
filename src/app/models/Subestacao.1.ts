import { RedeMt } from './RedeMt';

export class Subestacao {

    idSubestacao: number;
    redeMt: RedeMt = new RedeMt();
    codigo: string;
    nome: string;
    latitude: bigint;
    longitude: bigint;


    constructor(idSubestacao?: number, redeMt?: RedeMt, codigo?: string, nome?: string, longitude?: bigint, latitude?: bigint) {
        this.idSubestacao = idSubestacao;
        this.redeMt = redeMt;
        this.codigo = codigo;
        this.nome = nome;
        this.latitude = latitude;
        this.longitude = longitude;


    }
}
