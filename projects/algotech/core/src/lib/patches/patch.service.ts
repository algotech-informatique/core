import * as _ from 'lodash';
import * as rfc6902Ns from 'rfc6902';
import * as jsonpatch from 'fast-json-patch';
import { VoidableDiff } from 'rfc6902/diff';
import { PatchPropertyDto } from '../base';
const rfc6902 = rfc6902Ns;

const ARRAY_IDENTITY_01 = 'uuid';
const ARRAY_IDENTITY_02 = 'id';
const ARRAY_IDENTITY_03 = 'key';

export class PatchService<T> {

    private object: T;
    private patches: PatchPropertyDto[];
    private replaceArrayIndex = true;

    constructor() {
        /*
        let object = new PatchService<SmartModel>().recompose(patchesProperty, object);
        let patches = new PatchService<SmartModelDto>().compare(this.smartModelTmp, this.smartModelSelected);
        */
    }

    public recompose(patches: PatchPropertyDto[], object: T, byClone = true): T {

        this.object = byClone ? JSON.parse(JSON.stringify(object)) : object;
        this.patches = _.cloneDeep(patches);

        this.transform(false);
        return this.object;
    }

    public compare(obj1, obj2: Object, replaceArrayIndex = true, diff?: VoidableDiff): PatchPropertyDto[] {
        this.object = _.cloneDeep(obj1);

        this.patches = rfc6902.createPatch(obj1, obj2, diff);
        this.replaceArrayIndex = replaceArrayIndex;

        this.transform(true);
        return this.patches;
    }

    private calculPathMongo(patch: PatchPropertyDto): string {

        let currentOb: any = this.object;
        const explosePath = patch.path.split('/');
        let newPath = '';

        // Calcul new path !
        for (let iPath = 0; iPath < explosePath.length; iPath++) {

            let currentPath = explosePath[iPath];
            if (currentPath === '-') {
                currentPath = '[?]';
            }

            if (Array.isArray(currentOb) && currentOb[currentPath]) {
                currentOb = currentOb[currentPath];

                if (this.replaceArrayIndex && (patch.op !== 'add' || iPath < explosePath.length - 1)) {

                    if (currentOb[ARRAY_IDENTITY_01]) {
                        newPath = `${newPath}/[${ARRAY_IDENTITY_01}:${(currentOb[ARRAY_IDENTITY_01])}]`;
                    } else if (currentOb[ARRAY_IDENTITY_02]) {
                        newPath = `${newPath}/[${ARRAY_IDENTITY_02}:${(currentOb[ARRAY_IDENTITY_02])}]`;
                    } else if (currentOb[ARRAY_IDENTITY_03]) {
                        newPath = `${newPath}/[${ARRAY_IDENTITY_03}:${(currentOb[ARRAY_IDENTITY_03])}]`;
                    } else {
                        newPath = `${newPath}/[${currentPath}]`;
                    }

                } else {
                    newPath = `${newPath}/[${currentPath}]`;
                }
            } else if (currentPath !== '') {
                newPath = `${newPath}/${currentPath}`;
                currentOb = currentOb[currentPath];

                if (currentOb === undefined) {
                    break;
                }
            }
        }
        return newPath;
    }

    private calculPathJsonPath(patch: PatchPropertyDto): string {

        let currentOb: any = this.object;
        const explosePath = patch.path.split('/');
        let newPath = '';

        // Calcul new path !
        explosePath.forEach(
            currentPath => {
                if (this.pathIsArray(currentPath)) {
                    const index = this.getIndexArray(currentOb, currentPath);

                    if (index === -1) {
                        newPath = '';
                        return;
                    } else {
                        currentOb = currentOb[index];
                        newPath = `${newPath}/${index}`;
                    }

                } else if (currentPath !== '') {
                    currentOb = currentOb[currentPath];
                    newPath = `${newPath}/${currentPath}`;

                    if (currentOb === undefined) {
                        return '';
                    }
                }
            }
        );

        return newPath;
    }

    private getIndexArray(currentOb: any, currentPath: string): number {

        let index = -1;
        const pathFormat = currentPath.slice(1, currentPath.length - 1);

        if (!pathFormat.includes(':')) {
            // Index définit
            index = isNaN(parseInt(pathFormat)) ? Array.from(currentOb).length : parseInt(pathFormat);
        } else {
            // Search index
            const keyValue = pathFormat.split(':');

            index = Array
                .from(currentOb, aValue => aValue[keyValue[0]] === keyValue[1])
                .indexOf(true);
        }

        return index;

    }

    private pathIsArray(currentPath): Boolean {
        return RegExp('^[[].*.\]$').test(currentPath);
    }

    private transform(mongo: boolean) {
        const res: PatchPropertyDto[] = [];

        this.patches.forEach(patch => {

            let newPath = '';
            if (mongo) {
                newPath = this.calculPathMongo(patch);
                this.object = [patch as rfc6902Ns.Operation].reduce<T>(
                    jsonpatch.applyReducer,
                    this.object
                );
            } else {
                const newPatch: PatchPropertyDto = _.cloneDeep(patch);

                newPath = this.calculPathJsonPath(patch);
                newPatch.path = newPath;

                this.object = [newPatch as rfc6902Ns.Operation].reduce<T>(
                    jsonpatch.applyReducer,
                    this.object
                );
            }

            if (newPath !== '') {
                res.push(
                    _.assign(
                        _.cloneDeep(patch),
                        { path: newPath }
                    )
                );
            }
        });

        this.patches = res;
    }
}
