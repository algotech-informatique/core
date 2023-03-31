import { IsOptional, IsBoolean, IsArray, IsNumber } from 'class-validator';

// @dynamic
export class IndexationOptionsDto {

  @IsOptional()
  @IsArray()
  modelKeys?: string[];

  @IsOptional()
  @IsBoolean()
  updateIndexOnly?: boolean;

  @IsOptional()
  @IsNumber()
  limit?: Number;

  @IsOptional()
  @IsArray()
  uuids?: string[];

  @IsOptional()
  @IsBoolean()
  notIndexedOnly?: boolean
}