import { ValidatorConstraintInterface, ValidatorConstraint } from 'class-validator';

@ValidatorConstraint()
export class DateStringFormat implements ValidatorConstraintInterface {
    validate(date: string) {
        // tslint:disable-next-line:max-line-length
        const regex = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z)?$/g;

        return regex.test(date);
    }
}
