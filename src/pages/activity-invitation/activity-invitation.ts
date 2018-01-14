import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
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
  private iosURL = 'https://itunes.apple.com/hk/app/unitime/id1260366146?l=en&mt=8';
  private androidURL = undefined;
  private downloadURL = undefined;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private previewApi: PreviewsApi,
              private platform: Platform) {
    this.getActivityPreviewInput = {
      activityId: {
        id: this.navParams.data.id
      },
      previewToken: this.navParams.data.token
    };
    this.decidePlatfrom();
  }

  ionViewDidLoad() {
    this.getActivityInvitation();
    console.log('ionViewDidLoad ActivityInvitationPage');
  }

  public decidePlatfrom() {
    if (this.platform.is('ios')) {
      this.downloadURL = this.iosURL;
    } else if (this.platform.is('android')) {
      this.downloadURL = this.iosURL;
    } else {
      this.downloadURL = this.iosURL;
    }
  }


  private getActivityInvitation() {
    const getActivityPreviewSubscription = this.previewApi
      .getActivityPreview(this.getActivityPreviewInput)
      .finally(() => {
        getActivityPreviewSubscription.unsubscribe();
      })
      .subscribe(output => {
        this.activityPreview = output.activityPreview;

      }, error => {
        this.activityPreview = null;
      });
  }


}
