import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  @Input() deviceXs: boolean;
  
  constructor(private formBuilder: FormBuilder){}

  profileForm = this.formBuilder.group({
    username : [''],
    mail : [''],
    mobile : [''],
    password : [''],
  });

  cardForm = new FormGroup({
    name : new FormControl(''),
    cardNum : new FormControl(''),
    month : new FormControl(''),
    year : new FormControl('')
  });

  url = "./assets/avatar.png"
  
  isCard=true;

  Language = 
  [
    {name: "English", value: "english"},
    {name: "Arabic", value: "arabic"},
    {name: "Hindi", value: "hindi"},
    {name: "Tamil", value: "tamil"}, 
    {name: "Telegu", value: "telegu"}
  ];

  Month =
  [
    {name: "1", value: 1},
    {name: "2", value: 2},
    {name: "3", value: 3},
    {name: "4", value: 4},
    {name: "5", value: 5},
    {name: "6", value: 6},
    {name: "7", value: 7},
    {name: "8", value: 8},
    {name: "9", value: 9},
    {name: "10", value: 10},
    {name: "11", value: 11},
    {name: "12", value: 12}
  ];

  Year =
  [
    {name: "2020", value: 2020},
    {name: "2021", value: 2021},
    {name: "2022", value: 2022},
    {name: "2023", value: 2023},
    {name: "2024", value: 2024},
    {name: "2025", value: 2025},
    {name: "2026", value: 2026},
    {name: "2027", value: 2027},
    {name: "2028", value: 2028},
    {name: "2029", value: 2029},
    {name: "2030", value: 2030},
  ]
  
// Card details stored
  cardDetails=[{CardNo:"4591-XXXX-XXXX-XXXX",
  Name:"Aswin PP",
  Month:12,
  Year:2022
  }];

  name = " ";
  mail=" ";
  mobile=" ";
  password=" ";

// Enable editing function
  onNameEditClick() 
  {
    this.profileForm.get('username').enable();
  }
  onMailEditClick() 
  {
    this.profileForm.get('mail').enable();
  }
  onMobEditClick() 
  {
    this.profileForm.get('mobile').enable();
  }
  onPassEditClick() 
  {
    this.profileForm.get('password').enable();
  }

  // Submitting the user profile details
  onSubmit() 
  {
    this.name = this.profileForm.value.username;
    localStorage.setItem("name", this.name);
    this.profileForm.get('username').disable();

    this.mail = this.profileForm.value.mail;
    localStorage.setItem("mail", this.mail);
    this.profileForm.get('mail').disable();

    this.mobile = this.profileForm.value.mobile;
    localStorage.setItem("mobile", this.mobile);
    this.profileForm.get('mobile').disable();

    this.password = this.profileForm.value.password;
    localStorage.setItem("password", this.mobile);
    this.profileForm.get('password').disable();
  }

// Select image from files function
  selectFile(e) 
  {
    if (e.target.files) 
    {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
    if (!this.deviceXs) 
    {
      var popup = document.getElementById("myPopup");
      popup.classList.remove("show");
    }
  }

// Saved card deletion function
  onRemoveCard(card)
  {
     this.cardDetails=this.cardDetails.filter(cardDetails=>cardDetails.CardNo!=card.CardNo);
     this.isCard=false;
  }

// Popup display function
  dropOption() 
  {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

}
