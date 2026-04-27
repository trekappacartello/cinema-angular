import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Media } from '../models/media.models';

@Component({
  selector: 'app-media-list',
  standalone: true,
  imports: [],
  templateUrl: './media-list.html',
  styleUrls: ['./media-list.css'],
})
export class MediaList{
  constructor(private router: Router) {}

  catalogo: Media[] = [
    {
      id: 1,
      titolo: 'Avatar 1',
      regista: 'James Cameron',
      anno: 2009,
      genere: 'Fantascienza / Avventura',
      durata: 162,
      visto: false,
      tipo: 'Film',
      trama: 'Jake Sully, un ex-marine paraplegico, viene inviato su Pandora, una luna abitabile popolata dagli indigeni Na\'vi, per partecipare a un programma che mira a sfruttare le risorse del pianeta. Lì si innamora di Neytiri, una guerriera Na\'vi, e si schiera con loro contro gli umani invasori.',
      imageUrl: 'https://m.media-amazon.com/images/I/91N1lG+LBIS._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 2,
      titolo: 'Avatar 2: La via dell\'acqua',
      regista: 'James Cameron',
      anno: 2022,
      genere: 'Fantascienza / Avventura',
      durata: 192,
      visto: false,
      tipo: 'Film',
      trama: 'Dopo gli eventi del primo film, Jake Sully e Neytiri hanno una famiglia e vivono in armonia con i Na\'vi. Tuttavia, quando una nuova minaccia emerge, devono lasciare la loro casa e avventurarsi nelle misteriose regioni oceaniche di Pandora per proteggere la loro famiglia e il loro mondo.',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id: 3,
      titolo: 'Avatar 3',
      regista: 'James Cameron',
      anno: 2024,
      genere: 'Fantascienza / Avventura',
      durata: 180,
      visto: true,
      tipo: 'Film',
      trama: 'Il terzo capitolo della saga di Avatar, che continua a esplorare il mondo di Pandora e le avventure di Jake Sully e Neytiri mentre affrontano nuove sfide e minacce per proteggere il loro mondo e la loro famiglia.',
      imageUrl: 'https://pad.mymovies.it/filmclub/2010/10/204/locandinapg2.jpg'
    },
    {
      id: 4,
      titolo: 'Titanic',
      regista: '',
      anno: 1997,
      genere: 'Drammatico',
      durata: 194,
      visto: true,
      tipo: 'Film',
      trama: 'Jack e Rose, due giovani di classi sociali diverse, si incontrano a bordo del Titanic durante il suo viaggio inaugurale. Nonostante le differenze, si innamorano profondamente. Tuttavia, la loro storia d\'amore è messa alla prova quando il Titanic colpisce un iceberg e inizia a affondare, costringendo Jack e Rose a lottare per sopravvivere insieme.',
      imageUrl: 'https://m.media-amazon.com/images/I/811lT7khIrL._AC_UF894,1000_QL80_.jpg'
    },
    {
      id: 5,
      titolo: 'Pacific Rim',
      regista: 'Guillermo del Toro',
      anno: 2013,
      genere: 'Azione / Fantascienza',
      durata: 121,
      visto: false,
      tipo: 'Film',
      trama: 'Un gruppo di piloti di robot giganti si unisce per combattere contro i Kaiju, creature giganti che attaccano la Terra.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Pacific_Rim_FilmPoster.jpeg'
    }
  ];
  seleziona(elemento: Media) {
    this.router.navigate(['/detail', elemento.id]);
  }
}
