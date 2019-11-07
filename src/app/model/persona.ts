import { TipoDocumentoIdentidad } from './tipo-documento-identidad';
export class Persona extends TipoDocumentoIdentidad{
    id: number;
    nombre: string;
    apellido: string;
    tipoDocumentoIdentidad: TipoDocumentoIdentidad = new TipoDocumentoIdentidad();
    
    nroDocumento: string;
    telefono: string;
    fechaNacimiento: string; //Deberia ser Date
}
