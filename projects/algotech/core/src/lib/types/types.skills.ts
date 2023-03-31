import { TypeSchema } from './types.interface';

const skillDocuments: TypeSchema = {
    key: 'DOCUMENTS',
    type: 'skill:documents',
    schema: {
        documents: ['skill:document']
    }
};

const skillDocument: TypeSchema = {
    key: 'DOCUMENT',
    type: 'skill:document',
    schema: {
        uuid: 'string',
        name: 'string',
        ext: 'string',
        tags: ['string'],
        versions: ['skill:version']
    }
};

const skillVersion: TypeSchema = {
    key: 'VERSION',
    type: 'skill:version',
    schema: {
        uuid: 'string',
        fileID: 'string',
        size: 'number',
        dateUpdated: 'date',
        reason: 'string',
        userID: 'sys:user'
    }
};

export const typesSkills: TypeSchema[] = [
    skillDocuments, skillDocument, skillVersion
];
