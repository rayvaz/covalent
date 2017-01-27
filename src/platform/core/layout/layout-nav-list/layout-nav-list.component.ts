import { Component, Input, ViewChild } from '@angular/core';

import { MdSidenav, MdSidenavToggleResult } from '@angular/material';

import { TdLayoutComponent } from '../layout.component';
import { TdLayoutService } from '../services/layout.service';

@Component({
  selector: 'td-layout-nav-list',
  styleUrls: ['./layout-nav-list.component.scss' ],
  templateUrl: './layout-nav-list.component.html',
})
export class TdLayoutNavListComponent {

  @ViewChild(MdSidenav) _sideNav: MdSidenav;

  /**
   * title?: string
   * Title set in toolbar.
   */
  @Input('toolbarTitle') toolbarTitle: string;

  /**
   * icon?: string
   * icon name to be displayed before the title
   */
  @Input('icon') icon: string;

  /**
   * logo?: string
   * logo icon name to be displayed before the title.
   * If [icon] is set, then this will not be shown.
   */
  @Input('logo') logo: string;

  /**
   * mode?: 'side', 'push' or 'over'
   * The mode or styling of the sidenav.
   * Defaults to "side".
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('mode') mode: 'side' | 'push' | 'over' = 'side';

  /**
   * opened?: boolean
   * Whether or not the sidenav is opened. Use this binding to open/close the sidenav.
   * Defaults to "true".
   *
   * See "MdSidenav" documentation for more info.
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('opened') opened: boolean = true;

  /**
   * sidenavWidth?: string
   * Sets the "width" of the sidenav in either "px" or "%" ("%" is not well supported yet as stated in the layout docs)
   * Defaults to "350px".
   *
   * https://github.com/angular/material2/tree/master/src/lib/sidenav
   */
  @Input('sidenavWidth') sidenavWidth: string = '350px';

  /**
   * Checks if there is a [TdLayoutComponent] as parent.
   */
  get isMainSidenavAvailable(): boolean {
    return this._layoutService.isSidenavAvailable;
  }

  constructor(private _layoutService: TdLayoutService) {}

  /**
   * Proxy toggle method to access sidenav from outside (from td-layout template).
   */
  public toggle(): Promise<MdSidenavToggleResult> {
    return this._sideNav.toggle();
  }

  /**
   * Proxy open method to access sidenav from outside (from td-layout template).
   */
  public open(): Promise<MdSidenavToggleResult> {
    return this._sideNav.open();
  }

  /**
   * Proxy close method to access sidenav from outside (from td-layout template).
   */
  public close(): Promise<MdSidenavToggleResult> {
    return this._sideNav.close();
  }

  /**
   * If main sidenav is available, it will open the sidenav of the parent [TdLayoutComponent].
   */
  openMainSidenav(): void {
    this._layoutService.openMainSidenav();
  }
}
