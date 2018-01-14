import { Injectable } from '@angular/core';
import { AlertController, ToastController } from 'ionic-angular';

@Injectable()
export class MessageService {

  constructor(private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  public info(message: string, title?: string): any {
    this.alert(message, title ? title : 'Info');
  }

  public success(message: string, title?: string): any {
    this.alert(message, title ? title : 'Success');
  }

  public warn(message: string, title?: string): any {
    this.alert(message, title ? title : 'Warn');
  }

  public error(message: string, title?: string): any {
    this.alert(message, title ? title : 'Error');
  }

  public confirm(message: string, callback?: (result: boolean) => void): any;

  public confirm(message: string, title?: string, callback?: (result: boolean) => void): any;

  public confirm(message: string, titleOrCallBack?: string | ((result: boolean) => void), callback?: (result: boolean) => void): any {
    if (typeof titleOrCallBack === 'string') {
      confirm(message);
    } else {
      confirm(message);
    }
  }

  private alert(message: string, title: string): any {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
