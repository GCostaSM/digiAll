import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { StarterComponent } from './starter.component';

const routes: Routes = [
  {
    path: 'Bianca',
    data: {
      title: 'Bia',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Bianca' }
      ]
    },
    component: StarterComponent
  },
  {
    path: 'Jose',
    data: {
      title: 'Jose',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Jose' }
      ]
    },
    component: StarterComponent
  }
];

@NgModule({
  imports: [FormsModule, CommonModule, RouterModule.forChild(routes)],
  declarations: [StarterComponent]
})
export class StarterModule {}
