import { IsString, IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class UserSkillDto {
    @IsString()
    @IsDefined()
    @IsNotEmpty()
    skillKey: string;

    @IsNumber()
    @IsDefined()
    @IsNotEmpty()
    score: number;
}
