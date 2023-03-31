import { from, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Dictionary, zipObject } from 'lodash';
import axios, { AxiosResponse } from 'axios';

export class TranslationScripts {
    static getTranslations(inputDocumentId: string, expectedHeaders: string[], gridId?: string): Observable<any[]> {
        const GOOGLE_DOCS_URL = 'https://docs.google.com/spreadsheets/d/e/';
        const LINE_SEPARATOR = '\r\n';
        const COLUMN_SEPARATOR = '\t';

        return from(axios.get(
            GOOGLE_DOCS_URL + inputDocumentId + `/pub?output=tsv${(gridId ? `&single=true&gid=${gridId}` : '')}`,
            { headers: { 'Access-Control-Allow-Origin': '*' } },
        )).pipe(
            map((response: AxiosResponse) => {
                if (!response || !response.data) {
                    throwError('No data found');
                }

                const lines: string[] = response.data.split(LINE_SEPARATOR);
                const headers: string[] = lines[0].split(COLUMN_SEPARATOR);

                if (headers !== expectedHeaders) {
                    throwError(`Headers found in file [${headers.join(',')}] are not matching those expected [${expectedHeaders.join(',')}]`);
                }

                return lines.slice(1).map((line: string) => {
                    const values = line.split(COLUMN_SEPARATOR);
                    return zipObject(headers, values);
                });
            }),
            map((result: Dictionary<string>[]) => {
                const documents: any[] = [];
                // For each language keys, create document
                if (result.length > 0) {
                    Object.keys(result[0]).forEach((key: string) => {
                        if (key !== expectedHeaders[0]) {
                            documents.push({ [key]: {} });
                        }
                    });
                }

                result.forEach((dic: Dictionary<string>) => {
                    Object.keys(dic).forEach((key: string, index: number) => {
                        if (key !== expectedHeaders[0]) {
                            const obj = documents[index - 1][key];
                            if (obj) {
                                obj[dic[expectedHeaders[0]]] = dic[key];
                            }
                        }
                    });
                });

                return documents;
            }),
        );
    }
}
