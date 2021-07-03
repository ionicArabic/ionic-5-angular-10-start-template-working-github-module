import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { TaskService } from './task.service';
import { NewTaskModule } from './new-task/new-task.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NewTaskModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page],
  providers: [TaskService]
})
export class Tab3PageModule {}
