import { IsString, IsNotEmpty, IsDefined } from 'class-validator';

export class UpdatePasswordDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly oldPassword: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly newPassword: string;
}
