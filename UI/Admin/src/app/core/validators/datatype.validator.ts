import { ValidatorFn, AbstractControl } from '@angular/forms';

export function OnlyIntegerValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } | null => {
		let formControl = RegExp(
			'^[0-9]*$',
		);
        const meetsReq = formControl.test(control.value);
        
		return meetsReq ? null : { onlyinteger: { value: control.value } };
	};
}