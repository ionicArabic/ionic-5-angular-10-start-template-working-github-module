import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewTaskPage } from './new-task/new-task.page';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  taskList = [];
  todoList = [];

  /*[
    {
      title: 'عنوان المهمة الأولى',
      desc: 'وصف المهمة الأولى',
      done: false
    },
    {
      title: 'عنوان المهمة الثانية',
      desc: 'وصف المهمة الثانية',
      done: false
    },
    {
      title: 'عنوان المهمة الثالثة',
      desc: 'وصف المهمة الثالثة',
      done: false
    }
  ];*/

  // initialize taskService in constructor
  constructor(
    private taskService: TaskService,
    public modalCtrl: ModalController
  ) {
    this.getAllTask();
  }

  ngOnInit() {
    // get taskList from taskService
    this.taskList = this.taskService.getTasks();
  }

  getAllTask() {
    this.todoList = this.taskService.getTasks();
    console.log(this.taskService.getTasks());
  }

  async addTask() {
    console.log("before modal");
    let modal = await this.modalCtrl.create({
      component: NewTaskPage
    });
console.log("modal",modal);
    modal.onDidDismiss().then(newTaskObj => {
      this.getAllTask();
    });
    return await modal.present();
  }

  deleteTask(task) {
    // delete a task using taskService
    this.taskService.deleteTask(task);
  }
}
