import {ValidatorFn} from '@angular/forms'


export function appEmailValidator(domains: string[]): ValidatorFn {
    const domainString = domains.join('|');
    const re = new RegExp(`^[^@]{6,}@gmail\.${domainString}$`)
    return (control) => {
        
        return re.test(control.value) ? null : {appEmailValidator: true}
    }
}

    // return /[^@]{6,}@gmail\.(com|bg)/
