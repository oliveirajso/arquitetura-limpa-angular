import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  constructor(private logger: LoggerService) {}

  ngOnInit(): void {
    this.logger.info('Iniciado componente de curso');
  }
}
