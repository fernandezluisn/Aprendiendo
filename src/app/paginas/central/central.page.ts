import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/servicios/auth-service.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {

  tipo:string;  
  idioma:string;

  x;

  img1:string;
  img2:string;
  img3:string;
  img4:string;
  img5:string;

  audio1: any;
  audio2:any;
  audio3:any;
  audio4:any;
  audio5:any;
  
  btn1;
  btn2;
  btn3;
  btn4;
  btn5;
  constructor(private service:AuthServiceService, private router:Router) { 
    this.carg1("Animales");
    this.carg2("Espanol");
    this.btn1=document.getElementById("btn1");
    this.btn2=document.getElementById("btn2");
    this.btn3=document.getElementById("btn3");
    this.btn4=document.getElementById("btn4");
    this.btn5=document.getElementById("btn5");
    window.addEventListener("orientationchange", ()=> {
      this.x = window.screen.orientation.angle;  
        
        if(this.x==90 || this.x==-90){
          this.btn1.style="horizontal";
          this.btn2.style="horizontal";
          this.btn3.style="horizontal";
          this.btn4.style="horizontal";
          this.btn5.style="horizontal";
        }          
        else if(this.x==0 || this.x==180){
          this.btn1.style="vertical";
          this.btn2.style="vertical";
          this.btn3.style="vertical";
          this.btn4.style="vertical";
          this.btn5.style="vertical";
        }     
         
      
           
    })
    
  }

  ngOnInit() {
    this.btn1=document.getElementById("btn1");
    this.btn2=document.getElementById("btn2");
    this.btn3=document.getElementById("btn3");
    this.btn4=document.getElementById("btn4");
    this.btn5=document.getElementById("btn5");
  }

  cerrar(){
    this.service.logOutUser();    
    this.router.navigate(['login']);
  }

  carg1(tema:string){
    this.tipo=tema;
    switch(tema){
      case"Animales":      
      this.img1="../assets/perro.jpg";      
      this.img2="../assets/gato.jpg";      
      this.img3="../assets/caballo.jpg";      
      this.img4="../assets/Gallina-huevo.jpg";      
      this.img5="../assets/leon.jpg";           
      break;
      case "Numeros":
        this.img1="../assets/cero.jpg";      
      this.img2="../assets/uno.png";      
      this.img3="../assets/dos.jpg";      
      this.img4="../assets/tres.png";      
      this.img5="../assets/cuatro.jpg";           
        break;
      case "Colores":
        this.img1="../assets/azul.png";      
      this.img2="../assets/blanco.jpg";      
      this.img3="../assets/negro.png";      
      this.img4="../assets/rojo.png";      
      this.img5="../assets/verde.jpg";      
        break;
    }
    this.carg2(this.idioma);
  }

  carg2(idioma:string){
    this.idioma=idioma;
    switch(idioma){
      case "Espanol":
        if(this.tipo=="Animales"){
          let a1=new Audio("../assets/audio/perro.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/gato.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/caballo.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/gallina.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/Leon.mp3");
          this.audio5=a5;
        }else if(this.tipo=="Colores"){
          let a1=new Audio("../assets/audio/azul.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/blanco.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/negro.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/rojo.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/verde.mp3");
          this.audio5=a5;
        }else{
          let a1=new Audio("../assets/audio/ceroP.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/uno.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/dos.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/tres.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/cuatro.mp3");
          this.audio5=a5;
        }
        break;
      case "Ingles":
        if(this.tipo=="Animales"){
          let a1=new Audio("../assets/audio/dog.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/cat.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/horse.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/chiken.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/lyon.mp3");
          this.audio5=a5;
        }else if(this.tipo=="Colores"){
          let a1=new Audio("../assets/audio/blue.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/white.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/black.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/red.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/green.mp3");
          this.audio5=a5;
        }else{
          let a1=new Audio("../assets/audio/zero.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/one.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/two.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/tree.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/four.mp3");
          this.audio5=a5;
        }
        break;
      case "Portugues":
        if(this.tipo=="Animales"){
          let a1=new Audio("../assets/audio/cachogo.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/gatop.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/cavalho.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/galinha.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/leao.mp3");
          this.audio5=a5;
        }else if(this.tipo=="Colores"){
          let a1=new Audio("../assets/audio/azulp.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/Branco.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/preto.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/vermelho.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/verdep.mp3");
          this.audio5=a5;
        }else{
          let a1=new Audio("../assets/audio/ceroP.mp3");
          this.audio1=a1;
          let a2=new Audio("../assets/audio/um.mp3");
          this.audio2=a2;
          let a3=new Audio("../assets/audio/Dois.mp3");
          this.audio3=a3;
          let a4=new Audio("../assets/audio/TresP.mp3");
          this.audio4=a4;
          let a5=new Audio("../assets/audio/Quatro.mp3");
          this.audio5=a5;
        }
        break;
    }
  }

  btn1A(){
    this.audio1.play();
  }

  btn2A(){
    this.audio2.play();
  }

  btn3A(){
    this.audio3.play();
  }

  btn4A(){
    this.audio4.play();
  }

  btn5A(){
    this.audio5.play();
  }

}
