import { Locator, Page } from "@playwright/test";

type Event = {
  tag: string;
  name: string;
  price: string;
  date: string;
}

type AddEvent = {
  title: string;
  category: 'concert' | 'festival'; // ... etc
  dateFrom: string;
  dateTo: string;
  isPremium: boolean
}

export class Events {
  searchInput: Locator;

  constructor(private page: Page) {
    this.searchInput = this.page.locator('[type="search"]');
  }

  async searchEvent(name: string) {
    await this.searchInput.type(name);
  }

  async removeEvent(name: string) {
    // TODO: Implement
  }

  async addEvent(event: AddEvent) {
    // TODO: Implement
  }

  async getEvents(): Promise<Event[]> {
    const events: Event[] = [];

    const cards = await this.page.locator('.p-dataview-content .card').all();

    for (const card of cards) {
      const tag = await card.locator('.pi-tag ~ span').textContent();
      const name = await card.locator('.text-xl.font-bold').textContent();
      const price = await card.locator('.pi-money-bill ~ small').textContent();
      const date = await card.locator('.pi-calendar ~ small').textContent();

      events.push({
        tag: tag ?? '',
        name: name ?? '',
        price: price ?? '',
        date: date ?? ''
      })
    }

    return events;
  }
}
