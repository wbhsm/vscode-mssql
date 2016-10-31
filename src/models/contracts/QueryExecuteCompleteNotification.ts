import { NotificationType } from 'vscode-languageclient';
import { BatchSummary } from './QuerySummaries';

export namespace QueryExecuteCompleteEvent {
    export const type: NotificationType<QueryExecuteCompleteParams> = {
        get method(): string {
            return 'query/complete';
        }
    };
}

export class QueryExecuteCompleteParams {
    ownerUri: string;
    batchSummaries: BatchSummary[];
}
