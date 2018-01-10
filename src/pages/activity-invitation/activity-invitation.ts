import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActivityPreviewDto, GetActivityPreviewInput, PreviewsApi } from 'ut-api-js-services';

/**
 * Generated class for the ActivityInvitationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'activity-invitation',
  segment: 'activity-invitation'
})
@Component({
  selector: 'page-activity-invitation',
  templateUrl: 'activity-invitation.html',
})
export class ActivityInvitationPage {

  private getActivityPreviewInput: GetActivityPreviewInput = undefined;
  private activityPreview: ActivityPreviewDto = undefined;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private previewApi: PreviewsApi) {
    this.getActivityPreviewInput = {
      activityId: {
        id: '8dd76570-de1e-435d-5b3e-08d4e3dd125f'
      },
      previewToken: '8dd76570-de1e-435d-5b3e-08d4e3dd125f'
    };
  }

  ionViewDidLoad() {
    this.getActivityInvitation();
    console.log('ionViewDidLoad ActivityInvitationPage');
  }


  private getActivityInvitation() {
    const getActivityPreviewSubscription = this.previewApi
      .getActivityPreview(this.getActivityPreviewInput)
      .subscribe(output => {
        this.activityPreview = output.activityPreview;

        getActivityPreviewSubscription.unsubscribe();
      });
  }


}
