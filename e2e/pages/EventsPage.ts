import { Page } from "@playwright/test";
import { SideMenu, Events } from "../components";

export class EventsPage {
  sideMenu: SideMenu
  events: Events

  constructor(private page: Page) {
    this.sideMenu = new SideMenu(this.page);
    this.events = new Events(this.page);
  }
}
