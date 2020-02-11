import { ValidatorFn, FormGroup } from "@angular/forms";


export const nameValidator: ValidatorFn = (form: FormGroup) => {
    const name = form.get('name');
    const alterEgo = form.get('alterEgo');
    return name && alterEgo && name.value === alterEgo.value ? { nameErrors: 'სახელი და ალტერ ეგო სხვადასხვა უნდა იყოს' } : null;
}

export function idValidator(form: FormGroup) {
    const id = form.get('id');

    if (!id.value) {
        return { idErrors: ['შეიყვანე ID'] };
    } else if (id.value.length !== 11) {
        return { idErrors: ['ID უნდა იყოს 11 ნიშნა'] };
    }
}