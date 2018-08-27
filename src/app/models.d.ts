declare namespace models {
    export interface 调度汇总 {
        name: string;
        stationName: string;
        lineName: string;
        经度: number;
        纬度: number;
        当前站点序号: number;
        站点标识: number;
        站点分类: string;
        进站时间: Date;
        离站时间: Date;
        updateTime: Date;
        type: number;
        gprsId: number;
        onBoardid: number;
        车辆运行状态标识: number;
        运营状态: boolean;
        direction: number;
        is补发包: boolean;
    }
    export interface OAuthAccessTokenResult {
        access_token: string;
        openid: string;
        errcode: number;
    }
    export interface ChatMessage {
        sent: Date;
        message: string
    }
}
declare namespace server {
    interface 首页海报 {
        id: number;
        url: string;
        picUrl: string;
        order: number;
    }
    interface entityBase<TKey> {
        id: TKey;
        name: string;
        createTime: Date;
        isDelete: boolean;
    }
    interface feedBack extends entityBase<number> {
        openId: string;
        phone: string;
        content: string;
        picUrl: string;
        uploadTime: Date;
        actionTime?: Date;
        handler: string;
        state: feedBackState;
        type: feedBackType;
    }
    const enum feedBackState {
        未处理,
        已处理,
        忽略,
    }
    const enum feedBackType {
        投诉,
        建议,
    }
}