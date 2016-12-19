import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {InAppBrowser} from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      let browser = new InAppBrowser('https://ionic.io', '_system');
      browser.executeScript({code:'document.cookie;'}).then((cookie)=>console.log(cookie));
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
