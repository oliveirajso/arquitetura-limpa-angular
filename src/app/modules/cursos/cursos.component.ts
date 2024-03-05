import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
})
export class CursosComponent implements OnInit {
  form: FormGroup;
  constructor(
    private logger: LoggerService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.logger.info('Iniciado componente de curso');

    this.form = this.fb.group({
      curso: ['', Validators.required],
      link: [null],
      btnComID: [null],
      btnSemID: [null],
    });
  }

  onClickLink() {
    this.logger.log(this.form.controls['curso'].value);
    //console.log(this.form.controls['idCurso']);
    this.logger.info(this.form.get('link')?.value);
    this.logger.info(this.form.get('idCurso')?.value);
    //this.route.navigate(['cursos/133']);
  }
  teste() {
    console.log(this.form);
  }
}
