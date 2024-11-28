import { Context } from 'koishi'

export let redis: Context['database']

declare module 'koishi' {
    interface Tables {
        phigrosBanGroup: phigrosBanGroup
    }
}

// 这里是新增表的接口类型
export interface phigrosBanGroup {
    id: number
    groupId: string
    help: boolean
    bind: boolean
    b19: boolean
    wb19: boolean
    song: boolean
    ranklist: boolean
    fnc: boolean
    tipgame: boolean
    guessgame: boolean
    ltrgame: boolean
    sign: boolean
    setting: boolean
    dan: boolean
}

export const banGroupId = {
    id: 0,
    groupId: 1,
    help: 2,
    bind: 3,
    b19: 4,
    wb19: 5,
    song: 6,
    ranklist: 7,
    fnc: 8,
    tipgame: 9,
    guessgame: 10,
    ltrgame: 11,
    sign: 12,
    setting: 13,
    dan: 14,
}

export function apply(ctx: Context) {
    redis = ctx.database

    ctx.model.extend('phigrosBanGroup', {
        // 各字段的类型声明
        id: 'unsigned',
        groupId: 'string',
        help: 'boolean',
        bind: 'boolean',
        b19: 'boolean',
        wb19: 'boolean',
        song: 'boolean',
        ranklist: 'boolean',
        fnc: 'boolean',
        tipgame: 'boolean',
        guessgame: 'boolean',
        ltrgame: 'boolean',
        sign: 'boolean',
        setting: 'boolean',
        dan: 'boolean',
    })
}
