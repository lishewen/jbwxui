declare module models {
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
}