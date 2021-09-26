import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
import { CaptionService } from 'src/app/core/services/caption.service';
import { MenuItem } from 'src/app/core/services/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private menuService: MenuService, private captionService: CaptionService) { }
  menuItems: MenuItem[] = [];
  ngOnInit(): void {

    this.menuItems = this.menuService.getMenuItems();
  }

  isCaptionVisible() {
    return this.captionService.getCaptionStatus();
  }
}
