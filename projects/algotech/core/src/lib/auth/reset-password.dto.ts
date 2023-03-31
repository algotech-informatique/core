import { IsString, IsNotEmpty, IsDefined, IsUrl } from 'class-validator';

export class ResetPasswordDto {
  @IsUrl()
  @IsDefined()
  @IsNotEmpty()
  readonly url: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly login: string;
}

