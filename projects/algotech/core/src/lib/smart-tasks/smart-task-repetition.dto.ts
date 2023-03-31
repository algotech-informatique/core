import { IsDefined, IsString } from 'class-validator';

// @dynamic
export class SmartTaskRepetitionDto {
  @IsDefined()
  frequency?: number | '*';

  @IsDefined()
  @IsString()
  repeatType: 'hours' | 'days' | 'months';
}
