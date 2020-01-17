import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  url: string;
  desc: string;
}

@Component({
  selector: 'app-view-image-component',
  templateUrl: 'imageViewComponent.html',
  styleUrls: [ 'css/imageViewComponent.scss' ]
})

export class GalleryImageViewComponent {

  constructor(
    public dialogRef: MatDialogRef<GalleryImageViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
