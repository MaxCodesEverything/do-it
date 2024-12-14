import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  isModalActive: boolean = false;

  notesList: {taskName: string, isCompleted: boolean}[]= [];

  modalSwitch(){
    this.isModalActive = !this.isModalActive
  }

  onCancel(){
    this.modalSwitch()
  }

  addTask(form: NgForm){
    this.modalSwitch()
    this.notesList.push({taskName: form.controls['task'].value, isCompleted: false})
    form.controls['task'].setValue('')
  }

  deleteTask(index: number){
    this.notesList.splice(index, 1)
  }

  taskComplete(index: number){
    this.notesList[index].isCompleted = !this.notesList[index].isCompleted
  }
}
