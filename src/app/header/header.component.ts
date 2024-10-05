import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedContent: string | null = null;

  setContent(contentType: string) {
    this.selectedContent = contentType;
  }

  hoveredBox: string = ''; // This will store which box is currently hovered

  onHover(box: string): void {
    this.hoveredBox = box;
  }

}
