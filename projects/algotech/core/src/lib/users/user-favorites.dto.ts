import { IsDefined, IsArray } from "class-validator";

export class UserFavoritesDto {
    @IsDefined()
    @IsArray()
    documents: string[];

    @IsDefined()
    @IsArray()
    smartObjects: string[];
}
