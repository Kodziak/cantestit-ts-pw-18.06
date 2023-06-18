import { test, expect } from '@playwright/test';
import { LoginPage, EventsPage } from '../../pages';
import { Users } from '../../config';

let eventsPage: EventsPage;

test.beforeEach(async ({page}) => {
  await page.goto('/');

  const loginPage = new LoginPage(page);
  await loginPage.login(Users.Admin);

  eventsPage = new EventsPage(page);
})

test('Should be able to search events by name', async ({page}) => {
  await eventsPage.events.searchEvent('Web3');

  const events = await eventsPage.events.getEvents();

  expect(events.length).toBeGreaterThanOrEqual(1);
  events.forEach(event => {
    expect(event).toMatchObject({
      name: expect.stringContaining('Web3'.toUpperCase())
    })
  });
})
