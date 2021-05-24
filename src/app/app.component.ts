import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rating-app';
public rating1: any;
public rating2: any;


  ngOnInit(): void {
    this.rating1 = 0;
    this.rating2 = 0;
  }

  submitForm(form: NgForm) {
    form.resetForm();
    console.log("Rating 1: " + this.rating1);
    console.log("Rating 1: " + this.rating2);
    this.rating1 = 0;
    this.rating2 = 0;
}

}
