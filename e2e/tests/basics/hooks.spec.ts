import { test } from '@playwright/test';

// 1.
test.beforeAll(async () => {
  console.log('console.log: BEFORE ALL HOOK');
});

// 2.
// 5.
test.beforeEach(async () => {
  console.log('console.log: BEFORE EACH HOOK');
});

// 3.
test('TEST - 1', async () => {
  console.log("console.log: TEST - 1");
});

// 6.
test('TEST - 2', async () => {
  console.log("console.log: TEST - 2");
});

// 4.
// 7.
test.afterEach(async () => {
  console.log('console.log: AFTER EACH HOOK');
});

// 8.
test.afterAll(async () => {
  console.log('console.log: AFTER ALL HOOK');
})

// [chromium] › basics/hooks.spec.ts:11:5 › TEST - 1
// console.log: BEFORE ALL HOOK
// console.log: BEFORE EACH HOOK
// console.log: TEST - 1
// console.log: AFTER EACH HOOK
// [chromium] › basics/hooks.spec.ts:15:5 › TEST - 2
// console.log: BEFORE EACH HOOK
// console.log: TEST - 2
// console.log: AFTER EACH HOOK
// console.log: AFTER ALL HOOK
