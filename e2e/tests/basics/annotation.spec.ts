import { test } from '@playwright/test';

test('TEST', async () => {
  console.log('console.log: TEST');
});

// test.only('TEST - ONLY', async () => {
//   console.log('console.log: TEST - ONLY');
// });

test.skip('TEST - SKIP', async () => {
  console.log('console.log: TEST - SKIP');
});

test.fixme('TEST - FIXME', async () => {
  console.log('console.log: TEST - FIXME');
});

test('TEST - SKIP BROWSER - CHROMIUM', async ({browserName}) => {
  test.skip(browserName === 'chromium', 'Skipping on chromium browser.');

  console.log(`console.log: TEST - SKIP BROWSER - RUNNING ON: ${browserName}`);
});

test('TEST - SKIP BROWSER - EXCEPT CHROMIUM', async({browserName}) => {
  test.skip(browserName !== 'chromium', 'Skipping test except chromium browser.'); // ! == <- pisane razem

  console.log(`console.log: TEST - EXCEPT BROWSER - RUNNING ON: ${browserName}`);
});

test.describe('GROUP/DESCRIBE - LOGIN', async () => {
  test('TEST - GROUP/DESCRIBE - 1', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 1');
  })

  test('TEST - GROUP/DESCRIBE - 2', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 2');
  })
});

test.describe.skip('GROUP/DESCRIBE - SKIP', async () => {
  test('TEST - GROUP/DESCRIBE - 1', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 1');
  })

  test('TEST - GROUP/DESCRIBE - 2', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 2');
  })
});

test.describe('GROUP/DESCRIBE - SKIP BROWSER', async () => {
  test.skip(({browserName}) => browserName === 'chromium', 'Skipping group of tests on chromium');

  test('TEST - GROUP/DESCRIBE - 1', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 1');
  })

  test('TEST - GROUP/DESCRIBE - 2', async () => {
    console.log('console.log: TEST - GROUP/DESCRIBE - 2');
  })
});

test('@smoke TEST - SMOKE TEST', async () => {
  console.log('console.log: @smoke TEST - SMOKE TEST');
})
