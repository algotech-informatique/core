import { IsDefined, IsUUID, IsOptional, IsString, IsBoolean, ValidateNested } from 'class-validator';
import { Type, TypeHelpOptions } from 'class-transformer';
import { SnViewDto } from './smart-nodes-view.dto';
import { SnAppDto } from './smart-nodes-app.dto';
import { SnViewType } from './smart-nodes-view-type.dto';

// @dynamic
export class SnVersionDto {
    @IsDefined()
    @IsUUID()
    uuid: string;

    @IsDefined()
    createdDate: string;

    @IsOptional()
    updateDate?: string;

    @IsDefined()
    @IsString()
    creatorUuid: string;

    @IsDefined()
    @IsBoolean()
    deleted: boolean;

    @IsDefined()
    @ValidateNested()
    @Type((opts: TypeHelpOptions) => {
        if (((opts.object as SnVersionDto).view as SnAppDto).pages) {
            return SnAppDto;
        }
        if (((opts.object as SnVersionDto).view as SnViewDto).nodes) {
            return SnViewDto;
        }
        return Object;
    })
    view: SnViewType;
}
