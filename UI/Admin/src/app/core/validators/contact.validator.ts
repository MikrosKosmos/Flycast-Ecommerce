import {ValidatorFn, AbstractControl} from '@angular/forms';


export function MobileValidator(errorMessage = ''): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let formControl = RegExp(
      '^[0-9]{10}$',
    );
    const meetsReq = formControl.test(control.value);
    return meetsReq ? null : {onlyinteger: {value: control.value, errorMessage: errorMessage}};
  };
}

export function ContactValidator(errorMessage = ''): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let formControl = RegExp(
      '^[0-9]{4,10}$',
    );
    const meetsReq = formControl.test(control.value);
    return meetsReq ? null : {onlyinteger: {value: control.value, errorMessage: errorMessage}};
  };
}
