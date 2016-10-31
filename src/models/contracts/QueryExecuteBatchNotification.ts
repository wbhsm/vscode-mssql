import { NotificationType } from 'vscode-languageclient';
import { BatchSummary } from './QuerySummaries';

export namespace QueryExecuteBatchCompleteEvent {
    export const type: NotificationType<QueryExecuteBatchParams> = {
        get method(): string {
            return 'query/batchComplete';
        }
    };
}

export class QueryExecuteBatchParams {
    ownerUri: string;
    batchSummary: BatchSummary;
}
