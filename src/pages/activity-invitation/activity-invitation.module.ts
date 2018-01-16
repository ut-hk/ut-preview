import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityInvitationPage } from './activity-invitation';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ActivityInvitationPage,
  ],
  imports: [
    PipesModule,
    IonicPageModule.forChild(ActivityInvitationPage)
  ],
})
export class ActivityInvitationPageModule {
}
