import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../login/Services/api.service";
import {FormArray, FormBuilder} from "@angular/forms";
import {CreateCategoryRequest} from "../../../Models/RequestModels/CreateCategoryRequest";

@Component({
  selector: 'app-dialog-add-category',
  templateUrl: './dialog-add-category.component.html',
  styleUrls: ['./dialog-add-category.component.scss']
})
export class DialogAddCategoryComponent implements OnInit {
  FormAddCategory = this.fb.group({
    name:[''],
  });

  constructor(private api:ApiService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  HandleAddCategory() {
    this.api.CreateCategory(this.FormAddCategory.value as CreateCategoryRequest).subscribe(res=>{
      alert("Success");
      this.FormAddCategory.reset()
    })
    location.reload()
  }
}
