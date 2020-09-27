import { NavController } from '@ionic/angular';
import { LoginPage } from '../paginas/login/login.page';
import { Component } from '@angular/core';
import {AuthServiceService} from '../servicios/auth-service.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  
  email:string;
  password:string;
  loading:any;
  cuerpo:any;

  constructor(public navCtrl: NavController, private servicio:AuthServiceService, private router:Router, public alertController: AlertController, 
    private loadingCtrl: LoadingController) {
      this.email="";
    this.password="";
      this.cuerpo=document.getElementById("cuerpo");
  }
 
  async presentLoading(message: string) {

    this.loading = await this.loadingCtrl.create({
        message,
        spinner: "crescent",
        duration: 2500
    });
    return this.loading.present();

    
}

  async alertar(mensaje:string){
    const alert= this.alertController.create({
      cssClass: 'danger-alert-btn',
      header: 'Error',
      subHeader: 'Datos incorrectos',
      message: mensaje,
      buttons: ['OK']
    });

    (await alert).present();
  }

  login(){
    if(this.password.length>5 && this.email.length>9)
    {
      this.presentLoading('Aguarde...');
      this.servicio.loginUser(this.email, this.password).then(res=>{
        this.router.navigate(['central']);
      }).catch(error=>{
        this.alertar("Los datos ingresados no son correctos");      
      });
    }else{
      this.alertar("El password y el correo no corresponden.");
    }
    
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
