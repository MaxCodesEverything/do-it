import { Injectable, inject } from '@angular/core';
import { CRUDService } from './crud.service';

@Injectable({
  providedIn: 'root'
})
export class FiltrationService {
  crudService = inject(CRUDService);
  selectMenueValue: boolean | null = null;
  filteredNotes: any[] = [];
  filteredNotesBySearch: any[] = [];
  filterText: string = '';
  searchInputValue: string = '';

  filterNotesByStatus(){
    switch(this.selectMenueValue){
        case true:
            this.filteredNotes = this.crudService.notesList.filter(note => {
                return note.isCompleted == true
            });
            this.filteredNotes.forEach(note => {return note.taskName});
            break;
        case false:
            this.filteredNotes = this.crudService.notesList.filter(note => {
                return note.isCompleted == false
            });
            this.filteredNotes.forEach(note => {return note.taskName});
            break;
    }
    
    console.log(this.filteredNotes);
  }

  onSelect(event: Event){
    const selectElement = event.target as HTMLSelectElement;
    const selectValue = selectElement.value;

    switch(selectValue){
      case 'all':
        this.selectMenueValue = null;
        break;
      case 'done':
        this.selectMenueValue = true;
        break;
      case 'undone':
        this.selectMenueValue = false;
        break;
    }

    this.filterNotesByStatus();
  }
  
  filterNotesByText(){
    this.filteredNotes = this.crudService.notesList.filter(note => {
      return note.taskName.toLowerCase().includes(this.filterText.toLowerCase());
    })

    this.filteredNotes.forEach(note => {
        console.log(note.taskName);
    })
}

  onSearch(){
    if(this.searchInputValue != ''){
      this.filterText = this.searchInputValue;
      this.filterNotesByText();
    }
    else{
      this.filterText = '';
    }
  }
}