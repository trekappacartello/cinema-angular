export interface Media {
  id: number;
  titolo: string;
  regista: string;
  anno: number;
  genere: string;
  durata: number;
  visto: boolean;
  tipo: 'Film' | 'Serie TV';
  trama: string;
  imageUrl: string;
}
