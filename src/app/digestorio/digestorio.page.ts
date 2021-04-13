import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "digestorio.page.html",
  styleUrls: ["digestorio.page.scss"]
})
export class DigestorioPage {
  public items: any = [];

  constructor() {
    this.items = [
      { expanded: false }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  visible = false;
  toggle() {
   this.visible = !this.visible;
  }
}