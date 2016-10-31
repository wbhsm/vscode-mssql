import { ISelectionData, IResultMessage, IDbColumn  } from './../interfaces';

export class BatchSummary {
    hasError: boolean;
    id: number;
    selection: ISelectionData;
    messages: IResultMessage[];
    resultSetSummaries: ResultSetSummary[];
    executionElapsed: string;
    executionEnd: string;
    executionStart: string;
}

export class ResultSetSummary {
    id: number;
    rowCount: number;
    columnInfo: IDbColumn[];
}
