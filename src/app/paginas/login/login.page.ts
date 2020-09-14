import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../../servicios/auth-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string;
  password:string;

  

  
  
  constructor(private servicio:AuthServiceService, private router:Router, public alertController: AlertController ) { 
    this.email="";
    this.password="";

  }

  ngOnInit() {
  }

  async alertar(mensaje:string){
    const alert= this.alertController.create({
      cssClass: 'danger-alert-btn',
      header: 'Error',
      subHeader: 'Subtitle',
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }

  login(){
    this.servicio.loginUser(this.email, this.password).then(res=>{
      this.router.navigate(['home']);
    }).catch(error=>{
      this.alertar(error.message);      
    });
  }

  carg2(opcion:string){
    switch(opcion){
      case "Invitado":
        this.email="invitado@invitado.com";
        this.password="222222";
        break;
      case "Crear nuevo usuario":
        this.email="";
        this.password="";
        break;
      case "Usuario":
        this.email="usuario@usuario.com";
        this.password="333333";
        break;
      case "Admin":
        this.email="admin@admin.com";
        this.password="111111";
        break;
      case "Tester":
        this.email="tester@tester.com";
        this.password="555555";
        break;
    }
  }

}
