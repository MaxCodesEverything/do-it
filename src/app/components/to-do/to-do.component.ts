import { Component, inject } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { CRUDService } from '../../services/crud.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do',
  imports: [ModalComponent, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css'
})
export class ToDoComponent {
  crudService = inject(CRUDService);
}
