import { Component, inject } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CRUDService } from '../../services/crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltrationService } from '../../services/filtration.service';

@Component({
  selector: 'app-to-do',
  imports: [ModalComponent, CommonModule, FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  crudService = inject(CRUDService);
  filtrationService = inject(FiltrationService);

  ngOnInit(){
    const storedTasks = localStorage.getItem('tasks')
    if(storedTasks){
      this.crudService.notesList = JSON.parse(storedTasks)
    }
    
  }
}
