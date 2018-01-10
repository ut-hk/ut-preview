import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivityInvitationPage } from './activity-invitation';

@NgModule({
  declarations: [
    ActivityInvitationPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivityInvitationPage),
  ],
})
export class ActivityInvitationPageModule {
}
