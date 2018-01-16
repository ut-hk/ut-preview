import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ActivityPreviewDto, DescriptionDto, GetActivityPreviewInput, PreviewApi } from 'ut-api-js-services';
import { DescriptionType } from '../../app/consts/enums';


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

  public getActivityPreviewInput: GetActivityPreviewInput = undefined;

  public activityPreview: ActivityPreviewDto = undefined;
  public imageDescriptions: DescriptionDto[];

  // TODO: Android url
  public downloadUrl = undefined;
  private readonly iosUrl = 'https://itunes.apple.com/hk/app/unitime/id1260366146?l=en&mt=8';
  private readonly androidUrl = 'https://itunes.apple.com/hk/app/unitime/id1260366146?l=en&mt=8';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private previewApi: PreviewApi,
              private platform: Platform) {
    this.generateDownloadUrl();
  }

  ionViewDidLoad() {
    this.getActivityPreviewInput = {
      activityId: this.navParams.get('id'),
      previewToken: this.navParams.get('token')
    };

    if (
      this.getActivityPreviewInput.activityId !== ':id' &&
      this.getActivityPreviewInput.previewToken !== ':token') {
      this.getActivityInvitation();
    }
  }

  public generateDownloadUrl() {
    if (this.platform.is('ios')) {
      this.downloadUrl = this.iosUrl;
    } else if (this.platform.is('android')) {
      this.downloadUrl = this.androidUrl;
    } else {
      this.downloadUrl = this.iosUrl;
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

        this.imageDescriptions = this.activityPreview.descriptions.filter(d => d.type === <number>DescriptionType.InternalImage);
      }, error => {
        this.activityPreview = null;
      });
  }

}
