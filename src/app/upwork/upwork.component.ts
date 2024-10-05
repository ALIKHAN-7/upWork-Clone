import { Component } from '@angular/core';

@Component({
  selector: 'app-upwork',
  templateUrl: './upwork.component.html',
  styleUrls: ['./upwork.component.css']
})
export class UpworkComponent {

  selected: string = 'topSkills'; // Default to 'Top Skills'

  showSkills(type: string) {
    this.selected = type;
  }

}
