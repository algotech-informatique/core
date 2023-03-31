import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class SegmentDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  p1: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  p2: number;
}
