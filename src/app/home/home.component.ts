import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private FormBuilder: FormBuilder) { }
  formData = [];
  searchText;
  check = true;
  ngOnInit(): void {
  }
  Form = this.FormBuilder.group({
    Name: ['', Validators.required],
    Age: ['', Validators.required],
    Gender: ['', Validators.required],
    Time: ['', Validators.required]

  })

  Add() {
    let obj = {
      Name: this.Form.get('Name').value,
      Age: this.Form.get('Age').value,
      Gender: this.Form.get('Gender').value,
      Time: null,
      function: null
    }
    obj.Time = this.seconds(this.Form.get('Time').value);
    obj.function = setInterval(() => {
      if (obj.Time > 0) {
        --obj.Time
      } else {
        clearInterval(obj.function)
      }
    }, 1000)
    this.formData.push(obj)
  }
  seconds(e) {
    let a = e.split(':');
    let seconds1 = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
    return seconds1
  }

  Reset() {
    this.Form.reset()
    this.check = true;
  }
  checked(e) {
    if (e.target.checked && this.Form.valid) {
      this.check = false;
    }
    else {
      this.check = true;
    }
  }
}
