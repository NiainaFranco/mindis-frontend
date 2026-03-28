import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { JsonPipe } from "@angular/common";
import { RibonColorService } from "../../../service/ribon-color.service";

@Component({
  templateUrl: "./ribon-color-page.component.html",
  imports: [ReactiveFormsModule, JsonPipe],
})
export class RibonColorPage{
  createOrUpdateRibonColorForm! : FormGroup;
  constructor(private formBuilder: FormBuilder,private ribonColorService: RibonColorService ){
  }
  ngOnInit(){
    this.createOrUpdateRibonColorForm = this.formBuilder.group({
      color: [''] ,
      name:[''],
    })
  }
  createRibonColor (e: SubmitEvent){
    e.preventDefault()
    const formGroupValue = this.createOrUpdateRibonColorForm.getRawValue()
    console.log(formGroupValue)
    this.ribonColorService.createOrUpdate(formGroupValue).subscribe((value)=>{
      console.log(value)
    })
  }
}