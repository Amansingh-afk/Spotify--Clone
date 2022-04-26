import { NgModule } from '@angular/core';

// Pipes
import { ErrorImagePipe } from './error-image.pipe';
import { UriPipe } from './uri.pipe';

@NgModule({
  imports: [],
  declarations: [
        ErrorImagePipe,
        UriPipe,
    ],
  exports: [
        ErrorImagePipe,
        UriPipe,
    ]
})
export class PipesModule { }