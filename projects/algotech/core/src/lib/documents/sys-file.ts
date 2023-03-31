import { AnnotationDto } from './annotation.dto';
import { DocumentMetadatasDto } from './document-metadatas.dto';

export class SysFile {
    documentID: string;
    versionID: string;
    name: string;
    ext: string;
    size: number;
    dateUpdated: string;
    reason: string;
    user: string;
    tags: string[];
    metadatas: DocumentMetadatasDto[];
    annotations?: AnnotationDto[];
}
