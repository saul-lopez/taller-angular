import { Component, OnInit } from '@angular/core';
import { TareasApiService } from '../shared/tareas-api.service';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
})
export class TareasComponent implements OnInit  {
  tareas: Tarea[];
  constructor(public tareasApi: TareasApiService) { }

  ngOnInit() {
    this.tareasApi.getTareas().subscribe(
      tareas => {
        this.tareas = tareas;
        // this.alertService.hideOverlay();
      },
      error => {
        console.error(error.message);
        // this.alertService.hideOverlay();
        // this.alertService.showError(error.message);
      },
    );
  }

}
