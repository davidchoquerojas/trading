import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PremiumPage } from './premium';

@NgModule({
  declarations: [
    PremiumPage,
  ],
  entryComponents: [
    PremiumPage
  ],
  imports: [
    IonicPageModule.forChild(PremiumPage),
  ],
})
export class PremiumPageModule {}
