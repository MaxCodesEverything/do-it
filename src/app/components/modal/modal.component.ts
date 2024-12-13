import { Component, inject } from '@angular/core';
import { CRUDService } from '../../services/crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  crudService = inject(CRUDService);
}
