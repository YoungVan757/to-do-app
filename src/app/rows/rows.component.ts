import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  items: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) { 

    this.listData = [];

    this.items = this.fb.group({
      title: [''],
      description: [''],
      deadline: [Date],
      tags: ['']
    })
   }

/*this function adds item*/

   public addItem() : void{
    this.listData.push(this.items.value);
    this.items.reset();
   }

   reset() {
     this.items.reset();
   }

   /* Sorting Stuff that do not work, I really tried to figure it out, I could not*/


   public sortTitle() : void {
     var newArray = this.listData.sort( (a: number, b: number) => {
       console.log ('sorting');
     });
     this.listData.forEach((e: { title: any; description: any; deadline: any; tags: any; }) => {
      return(document.getElementsByClassName("todo-item"))
      } )
     
   }

   public sortDate() : void {
     
}

/**this function removes item(s) */

   public removeItem() : void{
     this.listData.forEach((value: any, index: any)=>{
if (value == this.listData[index] ){
     
    this.listData.splice(index,1);
    this.items.reset();
   }
  })
}

  ngOnInit(): void {
  }

}

