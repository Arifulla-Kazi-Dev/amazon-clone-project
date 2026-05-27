import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  newsletterEmail = '';
  joinedNewsletter = false;

  joinNewsletter(): void {
    if (this.newsletterEmail.trim()) {
      this.joinedNewsletter = true;
      this.newsletterEmail = '';
    }
  }
}
