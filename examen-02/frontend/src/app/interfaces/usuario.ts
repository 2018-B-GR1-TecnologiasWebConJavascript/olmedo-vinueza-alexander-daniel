export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  fecha_nacimiento: string;
  createdAt?: number;
  updatedAt?: number;
}
