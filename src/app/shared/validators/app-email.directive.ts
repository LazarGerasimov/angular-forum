import { Directive, Input } from '@angular/core';
import {AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAppEmail]'
})
export class AppEmailDirective implements Validator {

  @Input() appAppEmail: string[] = [];

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  

}
