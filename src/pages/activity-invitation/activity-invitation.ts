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
  segment: 'activity-invitation/:id/:token'
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
        id: this.navParams.data.id
      },
      previewToken: this.navParams.data.token
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
