import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormInput } from "../../../../components/form-input/form-input";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-ribon-color-edit-dialog',
  imports: [MatDialogModule, MatButtonModule,FormInput, ReactiveFormsModule],
  templateUrl: './ribon-color-edit-dialog.html',
  styleUrl: './ribon-color-edit-dialog.css',
})
export class RibonColorEditDialog {
  constructor(private ribonColorService: RibonColorService){

  }
  readonly dialogRef = inject(MatDialogRef<RibonColorEditDialog>)
  readonly data = inject<{ribonColor: GetRibonColor}>(MAT_DIALOG_DATA)
  readonly ribonColor = this.data.ribonColor
  name = new FormControl(this.ribonColor.name);
  color = new FormControl(this.ribonColor.color);
  onOkClick(){
    if(this.color.value && this.name.value){
      this.ribonColorService.createOrUpdate({
        color: this.color.value,
        name: this.name.value,
        id: this.ribonColor.id
      }).subscribe(()=>{
        this.dialogRef.close(true)
      })
    }
  }
  onCloseClick(){
    this.dialogRef.close()
  }
}
