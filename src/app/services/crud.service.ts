import { Injectable, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FiltrationService } from './filtration.service';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  task: string = ''
  isModalActive: boolean = false
  isInputEmpty: boolean = false
  notesList: {taskName: string, isCompleted: boolean}[]= []
  filteredNotes: {taskName: string, isCompleted: boolean}[] = []
  filterText: string = ''

  modalSwitch(){
    this.isModalActive = !this.isModalActive
  }

  onCancel(){
    this.modalSwitch()
    this.isInputEmpty = false
  }

  addTask(form: NgForm){
    if(form.controls['task'].value.trim() !== ''){
      this.isInputEmpty = false
      this.modalSwitch()
      this.notesList.push({taskName: form.controls['task'].value, isCompleted: false})
      form.controls['task'].setValue('')
      localStorage.setItem('tasks', JSON.stringify(this.notesList))
    }
    else {
      this.isInputEmpty = true
    }
  }

  deleteTask(index: number){
    this.notesList.splice(index, 1)
    localStorage.setItem('tasks', JSON.stringify(this.notesList))
  }

  taskComplete(index: number){
    this.notesList[index].isCompleted = !this.notesList[index].isCompleted
    localStorage.setItem('tasks', JSON.stringify(this.notesList))
  }
}
