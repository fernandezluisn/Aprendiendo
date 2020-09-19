import { Component, OnInit } from '@angular/core';
import { imagen } from 'src/clases/imagen';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {

    

  texto1:string;
  texto2:string;
  texto3:string;
  texto4:string;
  texto5:string;

  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;

  sign1:string;
  sign2:string;
  sign3:string;
  sign4:string;
  sign5:string;

  constructor() { 
    this.carg1("Animales");
    this.carg2("Espanol");

    
  }

  ngOnInit() {
  }

  carg1(tema:string){
    switch(tema){
      case"Animales":      
      this.img1="../assets/perro.jpg";
      this.texto1="Perro";
      this.img2="../assets/gato.jpg";
      this.texto2="Gato";
      this.img3="../assets/caballo.jpg";
      this.texto3="Caballo";
      this.img4="../assets/Gallina-huevo.jpg";
      this.texto4="Gallina";
      this.img5="../assets/leon.jpg";
      this.texto5="León";
      break;
      case "Numeros":
        break;
      case "Colores":
        this.img1="../assets/azul.png";
      this.texto1="Azul";
      this.img2="../assets/blanco.jpg";
      this.texto2="Blanco";
      this.img3="../assets/negro.png";
      this.texto3="Negro";
      this.img4="../assets/rojo.png";
      this.texto4="Rojo";
      this.img5="../assets/verde.jpg";
      this.texto5="Verde";
        break;
    }
  }

  carg2(idioma:string){
    
  }

}
