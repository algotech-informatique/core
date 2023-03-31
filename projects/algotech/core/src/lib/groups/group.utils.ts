import { GroupDto } from './group.dto';

// @dynamic
export class ATGroupUtils {
    private constructor() {} // static class

    public static getDefaults(): GroupDto[] { 
        return [
            { key: 'admin', name: 'Admin', description: null, application: null },
            { key: 'sadmin', name: 'Admin Editeur', description: null, application: null },
            { key: 'plan-editor', name: 'Plan-Editeur', description: null, application: null },
            { key: 'viewer', name: 'Viewer', description: null, application: null },
            { key: 'process-manager', name: 'Process Manager', description: null, application: null },
            { key: 'doc', name: 'Vision API Documentation', description: null, application: null },
        ]
    };

    public static isDefault(group: GroupDto): boolean {
        return ATGroupUtils.getDefaults().map(g => g.key).includes(group.key);
    }
}
