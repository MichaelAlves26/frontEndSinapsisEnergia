export class RedeMt{

    idRedeMt:number;
    codigoRede:string;
    nomeRede:string;
    tensaoNominal:bigint;

    constructor(idRedeMt?:number, codigoRede?:string, nomeRede?:string, tensaoNominal?:bigint){

        this.idRedeMt = idRedeMt;
        this.codigoRede = codigoRede;
        this.nomeRede = nomeRede;
        this.tensaoNominal = tensaoNominal
    }

}