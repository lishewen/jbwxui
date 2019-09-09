import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'Page',
    template: `
    <div class="page__hd">
        <h1 class="page__title" [innerHTML]="title"></h1>
        <p class="page__desc" [innerHTML]="subTitle"></p>
    </div>
    <div class="page__bd" [ngClass]="{'page__bd_spacing': spacing}"><ng-content></ng-content></div>
    <div class="page__ft" [ngClass]="{'j_bottom': ftBottom}" *ngIf="!noBottom">
        <ng-content select="[footer]"></ng-content>
    </div>
    <div footer class="weui-footer">
        <p class="weui-footer__text">Copyright © 2019 梧州珍宝巴士</p>
    </div>
    `,
    host: {
        'class': 'page'
    },
    styleUrls: ['./page.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class PageComponent {
    @Input() title: string;
    @Input() subTitle: string;
    @Input() spacing = true;
    @Input() ftBottom = false;
    @Input() noBottom = false;
}
