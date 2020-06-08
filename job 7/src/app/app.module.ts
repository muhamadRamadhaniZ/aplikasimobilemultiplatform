import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SQLite } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AlertProvider } from '../providers/alert/alert';
import { EnvProvider } from '../providers/env/env';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpClientModule } from '@angular/common/http';
import { MyproductPage } from '../pages/myproduct/myproduct';
import { FormproductPage } from '../pages/formproduct/formproduct';
import { ProductProvider } from '../providers/product/product';
import { CovidinfoProvider } from '../providers/covidinfo/covidinfo';
import { CovidinfoPage } from '../pages/covidinfo/covidinfo';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { DatabaseProvider } from '../providers/database/database';
import { ProductfavoriteProvider } from '../providers/productfavorite/productfavorite';
import { MyfavoritePage } from '../pages/myfavorite/myfavorite';
import { SearchPage } from '../pages/search/search';
import { DetailproductPage } from '../pages/detailproduct/detailproduct';
import { Camera } from '@ionic-native/camera';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
@NgModule({
 declarations: [
      MyApp,
      HomePage,
      RegisterPage,
      LoginPage,
      TabsPage,
      MyproductPage,
      FormproductPage,
      CovidinfoPage,
      MyprofilePage,
      MyfavoritePage,
      SearchPage,
      DetailproductPage
 ],
 imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(MyApp)
 ],
 bootstrap: [IonicApp],
 entryComponents: [
      MyApp,
      HomePage,
      RegisterPage,
      LoginPage,
      TabsPage,
      MyproductPage,
      FormproductPage,
      CovidinfoPage,
      MyprofilePage,
      MyfavoritePage,
      SearchPage,
      DetailproductPage
 ],
 providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      AuthProvider,
      AlertProvider,
      EnvProvider,
         ProductProvider,
         CovidinfoProvider,
         CovidinfoProvider,
         SQLite,
         DatabaseProvider,
         ProductfavoriteProvider,
         FileTransfer,
         FileTransferObject,
         File,
         FilePath,
         Camera

 ]
})
export class AppModule {}