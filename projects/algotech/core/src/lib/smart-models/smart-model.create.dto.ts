import { SmartModelDto } from './smart-model.dto';
import { SmartModelConfig } from '../modeler';
import { IsDefined, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

// @dynamic
export class SmartModelCreateDto {

    @IsDefined()
    @ValidateNested()
    @Type(() => SmartModelDto)
    model: SmartModelDto;

    @IsDefined()
    @ValidateNested()
    @Type(() => SmartModelConfig)
    config: SmartModelConfig;
}
