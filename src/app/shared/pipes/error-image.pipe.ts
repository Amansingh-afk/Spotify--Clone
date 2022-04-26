import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'errorImage'
})
export class ErrorImagePipe implements PipeTransform {

  // validates images before display them in view
  transform(images: any[]): string {
    if (!images) {
      console.log('!images');
      return 'assets/img/no-image.png';
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
