import { RequestType } from 'vscode-languageclient';
import { ISelectionData } from './../interfaces';

// ------------------------------- < Query Dispose Request > ----------------------------------------
export namespace QueryDisposeRequest {
    export const type: RequestType<QueryDisposeParams, QueryDisposeResult, void> = {
                                                                                        get method(): string {
                                                                                            return 'query/dispose';
                                                                                        }
                                                                                   };
}

export class QueryDisposeParams {
    ownerUri: string;
}

export class QueryDisposeResult {
    messages: string;
}
// --------------------------------- </ Query Dispose Request > ----------------------------------------

// --------------------------------- < Query Execution Request > ---------------------------------------
export namespace QueryExecuteRequest {
    export const type: RequestType<QueryExecuteParams, QueryExecuteResult, void> = {
                                                                                        get method(): string {
                                                                                            return 'query/execute';
                                                                                        }
                                                                                    };
}

export class QueryExecuteParams {
    ownerUri: string;
    querySelection: ISelectionData;
}

export class QueryExecuteResult {
    messages: string;
}

// --------------------------------- </ Query Execution Request > ---------------------------------------

// --------------------------------- < Query Results Request > ------------------------------------------
export namespace QueryExecuteSubsetRequest {
    export const type: RequestType<QueryExecuteSubsetParams, QueryExecuteSubsetResult, void> = {
                                                                                        get method(): string {
                                                                                            return 'query/subset';
                                                                                        }
                                                                                    };
}

export class QueryExecuteSubsetParams {
    ownerUri: string;
    batchIndex: number;
    resultSetIndex: number;
    rowsStartIndex: number;
    rowsCount: number;
}

export class ResultSetSubset {
    rowCount: number;
    rows: any[][];
}

export class QueryExecuteSubsetResult {
    message: string;
    resultSubset: ResultSetSubset;
}

// --------------------------------- </ Query Results Request > ------------------------------------------
