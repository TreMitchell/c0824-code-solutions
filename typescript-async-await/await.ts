import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

function readOnce(): Promise<void> {
  return read('foo/bar.html').then((msg) =>
    console.log(elapsed(), 'readOnce:', msg)
  );
}

async function readSeveral(): Promise<void> {
  const msg1 = await read('foo1/bar.html');
  console.log(elapsed(), 'readSeveral1:', msg1);
  const msg2 = await read('foo2/bar.html');
  console.log(elapsed(), 'readSeveral2:', msg2);
  const msg3 = await read('foo3/bar.html');
  console.log(elapsed(), 'readSeveral3:', msg3);
}

async function readChained(): Promise<void> {
  const msg1Chained = await read('foo-chain/bar.html');
  console.log(elapsed(), 'readChained1:', msg1Chained);
  const msg2Chained = await read(msg1Chained);
  console.log(elapsed(), 'readChained2:', msg2Chained);
  const msg3Chained = await read(msg2Chained);
  console.log(elapsed(), 'readChained3:', msg3Chained);
}

readOnce()
  .then(() => readSeveral())
  .then(() => readChained());
