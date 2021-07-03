import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: 'new-task.page.html',
  styleUrls: ['new-task.page.scss']
})
export class NewTaskPage implements OnInit {
  newTask = {
    title: '',
    desc: '',
    done: false
  };
  constructor(
    private taskService: TaskService,
    public modalCtrl: ModalController
  ) {}

  ngOnInit() {}

   addTask() {
    // add task to taskList using taskService
   this.taskService.addTask(this.newTask);

    this.dismis()
  }

  

  async dismis() {
    await this.modalCtrl.dismiss(this.newTask);
  }
}
