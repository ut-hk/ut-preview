import { Pipe, PipeTransform } from '@angular/core';
import { ENVS } from '../../app/consts/envs';

/**
 * Generated class for the InternalImagePipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'internalImage',
})
export class InternalImagePipe implements PipeTransform {

  transform(value: any, size?: string): any {

    if (value == null) {
      return null;
    }

    let fileUrl = ENVS.url + '/api/File/GetFile?id=' + value;

    switch (size) {
      case 'lg':
        fileUrl = fileUrl + '&size=2';
        break;
      case 'md':
        fileUrl = fileUrl + '&size=1';
        break;
      default:
        fileUrl = fileUrl + '&size=0';
        break;
    }

    return fileUrl;
  }

}
