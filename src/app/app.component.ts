import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CommonModule, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HomeComponent,CommonModule]
})
export class AppComponent {
  title = 'NgContent';
}
