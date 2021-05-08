import { Connection } from "post-me";
import { skappActionType, ISkappDAC, IDACResponse } from "./types";
export default class SkappDAC implements ISkappDAC {
    protected connection: Promise<Connection>;
    private client;
    private mySky;
    private paths;
    private skapp;
    private skappDict;
    constructor();
    skappAction(action: skappActionType, appId: string, data: any): Promise<IDACResponse>;
    private checkPublishedApp;
    private updatePublisedIndex;
    private updateDeployedIndex;
    init(): Promise<void>;
    getPublishedApps(appIds: string[]): Promise<any[]>;
    getPublishedAppsCount(appIds: string[]): Promise<any>;
    getSkappsInfo(appIds: string[]): Promise<any[]>;
    getSkappStats(appId: string): Promise<any>;
    getSkappComments(appId: string): Promise<any>;
    getDeployedApps(appIds: string[]): Promise<any[]>;
    private getPublishedAppInfo;
    private getPublishedAppStats;
    private setPublishedAppStats;
    private getPublishedAppComments;
    private setPublishedAppComments;
    private setPublishedAppInfo;
    private getDeployedAppInfo;
    private setDeployedAppInfo;
    onUserLogin(): Promise<void>;
    private registerSkappName;
    private downloadFile;
    private updateFile;
    private toPersistence;
    private log;
}
