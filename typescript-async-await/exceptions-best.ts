import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  const msg = await read('foo', false);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral(): Promise<void> {
  const msgSeveral = await read('foo1', false);
  console.log(elapsed(), 'throwSeveral1:', msgSeveral);

  const msg2Several = await read(msgSeveral);
  console.log(elapsed(), 'throwSeveral2:', msg2Several);

  const msg3Several = await read(msg2Several);
  console.log(elapsed(), 'throwSeveral3:', msg3Several);
}

async function throwChained(): Promise<void> {
  const msgChained = await read('foo-chain', false);
  console.log(elapsed(), 'throwChained1:', msgChained);

  const msg2Chained = await read(msgChained);
  console.log(elapsed(), 'throwChained2:', msg2Chained);

  const msg3Chained = await read(msg2Chained);
  console.log(elapsed(), 'throwChained3:', msg3Chained);
}

try {
  await throwOnce();
  await throwSeveral();
  await throwChained();
} catch (error) {
  console.log(elapsed(), 'Error:', error);
}
