import { Metadata } from './metadata.dto';

export class FileInfo {
    fileId: string;
    uploadDate: string;
    length: number;
    chunkSize: number;
    filename: string;
    md5: string;
    mimetype: string;
    metadata: Metadata;
}
