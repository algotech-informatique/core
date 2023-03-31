import { IsString, IsNotEmpty, IsDefined, IsOptional, IsBoolean } from 'class-validator';

export class AssignPasswordDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly token: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly oldPassword?: string;

  @IsBoolean()
  @IsOptional()
  readonly checkOldPassword?: boolean;
}
