import {
  IsString,
  IsNotEmpty,
  IsDefined,
  IsArray,
  IsEmail,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { LangDto } from "../lang";

// @dynamic
export class CustomerInitDto {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  customerKey: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  login: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  password: string;

  @IsArray()
  @IsDefined()
  @ValidateNested()
  @Type(() => LangDto)
  languages: LangDto[];
}
