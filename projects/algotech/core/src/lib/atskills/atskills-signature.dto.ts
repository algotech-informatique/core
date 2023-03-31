import { IsDefined, IsString } from 'class-validator';

// @dynamic
export class ATSignatureDto {

    @IsDefined()
    @IsString()
    signatureID: string;

    @IsDefined()
    @IsString()
    date: string;

    @IsDefined()
    @IsString()
    userID: string;
}
