import { Context } from 'koishi';
export declare let redis: Context['database'];
declare module 'koishi' {
    interface Tables {
        phigrosBanGroup: phigrosBanGroup;
        phigrosUserToken: phigrosUserToken;
        phigrosBanSessionToken: phigrosBanSessionToken;
        phigrosUserRks: phigrosUserRks;
        phigrosJrrp: phigrosJrrp;
    }
}
export interface phigrosBanGroup {
    id: number;
    groupId: string;
    help: boolean;
    bind: boolean;
    b19: boolean;
    wb19: boolean;
    song: boolean;
    ranklist: boolean;
    fnc: boolean;
    tipgame: boolean;
    guessgame: boolean;
    ltrgame: boolean;
    sign: boolean;
    setting: boolean;
    dan: boolean;
}
export declare const banGroupId: {
    id: string;
    groupId: string;
    help: string;
    bind: string;
    b19: string;
    wb19: string;
    song: string;
    ranklist: string;
    fnc: string;
    tipgame: string;
    guessgame: string;
    ltrgame: string;
    sign: string;
    setting: string;
    dan: string;
};
export interface phigrosUserToken {
    id: number;
    userId: string;
    token: string;
}
export declare const phigrosUserTokenId: {
    id: string;
    userId: string;
    token: string;
};
export interface phigrosBanSessionToken {
    id: number;
    sessionToken: string;
}
export declare const phigrosBanSessionTokenId: {
    id: string;
    sessionToken: string;
};
export interface phigrosUserRks {
    id: number;
    token: string;
    rks: number;
}
export declare const phigrosUserRksId: {
    id: string;
    token: string;
    rks: string;
};
export interface phigrosJrrp {
    id: number;
    userId: string;
    value: string;
}
export declare const phigrosJrrpId: {
    id: string;
    userId: string;
    value: string;
};
export declare function apply(ctx: Context): void;
