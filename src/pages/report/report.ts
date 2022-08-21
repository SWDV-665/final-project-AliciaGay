import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    cameraDirection: 0
  }

  clickedImagePath: any;

  constructor(
    public navCtrl: NavController,
    private camera: Camera) {

  }

clickImage () {
  this.camera.getPicture(this.options).then((imageData) => {
  // base 64 encoded string or file URI
  // base64 (DATA_URL):
  let base64Image = 'data:image/jpeg;base64, '+ ImageData;
  this.clickedImagePath = 'data:image/jpeg;base64,' + ImageData;
}, (err) => {
  //handle error

});
}
}