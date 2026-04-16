import { Component, inject, signal } from '@angular/core';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { MatAnchor, MatButtonModule } from '@angular/material/button';
import { FormInput } from '../../../../components/form-input/form-input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { MatDialogRef, MatDialogContent, MatDialogActions, MatDialogContainer, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-ribon-color-create-dialog',
  imports: [MatDialogModule, MatButtonModule, MatAnchor, FormInput, MatFormFieldModule, ReactiveFormsModule, MatDialogContent, MatDialogActions, MatDialogContainer],
  templateUrl: './ribon-color-create-dialog.html',
})
export class RibonColorCreateDialog{
  constructor(private ribonColorService: RibonColorService) {}
  readonly dialogRef = inject(MatDialogRef<RibonColorCreateDialog>)

  onCloseClick() : void {
    this.dialogRef.close();
  }
  ngOnInit(){
    console.log("initialized")
  }

  onCreateClick = () => {
    if (this.color.value && this.name.value) {
      this.ribonColorService.createOrUpdate({
        color: this.color.value,
        name: this.name.value,
      }).subscribe(()=>{
        this.dialogRef.close(true)
      });
    }
  };
  name = new FormControl('');
  nameErrorMessage = signal('');
  color = new FormControl('');
}
