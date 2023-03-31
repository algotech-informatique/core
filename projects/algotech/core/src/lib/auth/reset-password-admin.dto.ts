import { IsString, IsNotEmpty, IsDefined, IsUrl, IsBoolean } from 'class-validator';

export class ResetPasswordAdminDto {

  @IsUrl()
  @IsDefined()
  @IsNotEmpty()
  readonly url: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly newPassword: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly userUuid: string;

  @IsBoolean()
  @IsDefined()
  @IsNotEmpty()
  readonly sendMail: boolean;

}

