import { TypeSchema } from './types.interface';

const typeUser: TypeSchema = {
    key: 'USER',
    type: 'sys:user',
    schema: {
        uuid: 'string',
        credentials: {
            login: 'string',
            access_token: 'string'
        },
        email: 'string',
        firstName: 'string',
        lastName: 'string',
        groups: ['string'],
        pictureUrl: 'string'
    },
};

const typeGroup: TypeSchema = {
    key: 'GROUP',
    type: 'sys:group',
    schema: {
        key: 'string',
        name: 'string',
        description: 'string'
    },
};

const typeNotification: TypeSchema = {
    key: 'NOTIFICATION',
    type: 'sys:notification',
    schema: {
        title: 'string',
        content: 'string',
        additionalInformation: 'string',
        author: 'string',
        date: 'date',
    }
};

const typeGListValue: TypeSchema = {
    key: 'GLISTVALUE',
    type: 'sys:glistvalue',
    schema: {
        key: 'string',
        value: 'string',
    }
}

const typeQuery: TypeSchema = {
    key: 'QUERY',
    type: 'sys:query',
    schema: {
        search: 'string',
        filter: ['sys:filterpair'],
        order: ['sys:orderpair'],
        skip: 'number',
        limit: 'number'
    }
}

const typeQueryOrderPair: TypeSchema = {
    key: 'ORDERPAIR',
    type: 'sys:orderpair',
    schema: {
        key: 'string',
        value: 'string'
    }
}

const typeQueryFilterPair: TypeSchema = {
    key: 'FILTERPAIR',
    type: 'sys:filterpair',
    schema: {
        key: 'string',
        value: 'sys:filter'
    }
}

const typeQueryFilter: TypeSchema = {
    key: 'FILTER',
    type: 'sys:filter',
    schema: {
        criteria: 'string',
        value: 'any',
        type: 'string'
    }
}

const typeFile: TypeSchema = {
    key: 'FILE',
    type: 'sys:file',
    name: 'SKILLS_DOCUMENT',
    skills: 'atDocument',
    schema: {
        documentID: 'string',
        versionID: 'string',
        name: 'string',
        ext: 'string',
        size: 'number',
        dateUpdated: 'date',
        reason: 'string',
        user: 'string',
        tags: ['string']
    }
};

const typeLocation: TypeSchema = {
    key: 'LOCATION',
    type: 'sys:location',
    name: 'SKILLS_GEOLOCATION',
    skills: 'atGeolocation',
    schema: {
        layerKey: 'string',
        type: 'string',
        coordinates: ['number']
    }
};

const typeSignature: TypeSchema = {
    key: 'SIGNATURE',
    type: 'sys:signature',
    name: 'SKILLS_SIGNATURE',
    skills: 'atSignature',
    schema: {
        userID: 'string',
        user: 'string',
        date: 'date',
        signatureBase64: 'string'
    }
};

const typePagination: TypeSchema = {
    key: 'PAGINATION',
    type: 'sys:pagination',
    schema: {
        page: 'number',
        limit: 'number',
        search: 'string'
    }
};

const typeProfile: TypeSchema = {
    key: 'PROFILE',
    type: 'sys:profile',
    schema: {
        uuid: 'string',
        name: 'string'
    }
};

const typeVariable: TypeSchema = {
    key: 'VARIABLE',
    type: 'sys:variable',
    schema: {
        uuid: 'string',
        key: 'string',
        type: 'string'
    }
};

const typeWorkflow: TypeSchema = {
    key: 'WORKFLOW',
    type: 'sys:workflow',
    schema: {
        uuid: 'string',
        displayName: 'string',
        description: 'string',
        iconName: 'string',
        profiles: ['sys:profile'],
        variables: ['sys:variable']
    }
};

const typeSchedule: TypeSchema = {
    key: 'SCHEDULE',
    type: 'sys:schedule',
    schema: {
        uuid: 'string',
        scheduleTypeKey: 'string',
        title: 'string',
        repetitionMode: 'string',
        scheduleStatus: 'string',
        creationDate: 'date'
    }
};

const typeTag: TypeSchema = {
    key: 'TAG',
    type: 'sys:tag',
    name: 'SKILLS_TAG',
    skills: 'atTag',
    schema: {
        tags: ['string'],
    }
};

const typeMagnet: TypeSchema = {
    key: 'MAGNET',
    type: 'sys:magnet',
    name: 'SKILLS_MAGNET',
    skills: 'atMagnet',
    schema: {
        appKey: 'string',
        magnetsZoneKey: 'string',
        boardInstance: 'string',
        x: 'number',
        y: 'number',
        order: 'number',
    }
};

export const typesSys: TypeSchema[] = [typeQuery, typeQueryFilter, typeQueryFilterPair, typeQueryOrderPair,
    typeUser, typeGroup, typeFile, typeLocation, typeTag, typePagination,
    typeNotification, typeSignature, typeProfile, typeVariable, typeWorkflow, typeSchedule, typeMagnet, typeGListValue];
