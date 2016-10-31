/*
*  Class for handler and distributing notification coming from the
*  service layer
*/
import QueryRunner from './QueryRunner';
import SqlToolsServiceClient from '../languageservice/serviceclient';
import {QueryExecuteCompleteEvent, QueryExecuteCompleteParams} from '../models/contracts/QueryExecuteCompleteNotification';
import {NotificationHandler} from 'vscode-languageclient';

export class QueryNotificationHandler {
    private static _instance: QueryNotificationHandler;
    private _queryRunners = new Map<string, QueryRunner>();

    static get instance(): QueryNotificationHandler {
        if (QueryNotificationHandler._instance) {
            return this._instance;
        } else {
            this._instance = new QueryNotificationHandler();
            this._instance.initialize();
            return this._instance;
        }
    }

    // register the handler to handle notifications for queries
    private initialize(): void {
        SqlToolsServiceClient.instance.onNotification(QueryExecuteCompleteEvent.type, this.handleCompletionNotification());
    }

    // registers queryRunners with their uris to distribute notifications
    public registerRunner(runner: QueryRunner, uri: string): void {
        this._queryRunners.set(uri, runner);
    }

    // handles distributing notifications to appropriate
    private handleCompletionNotification(): NotificationHandler<QueryExecuteCompleteParams> {
        const self = this;
        return (event) => {
            // This is the last event for a query, so we will stop listening after this
            self._queryRunners.get(event.ownerUri).handleQueryComplete(event);
            self._queryRunners.delete(event.ownerUri);
        };
    }
}
