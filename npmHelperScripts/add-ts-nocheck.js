// Since solid-start is still in beta it has issues with the library's TS types.
// For reference: https://github.com/solidjs/solid-start/issues/255

// This script is a hack which adds a // @ts-nocheck to the top of the files that are causing issues.

import fs from 'fs';
import sjs from 'shelljs';

const tsFilesToIgnore = [
  `node_modules/solid-start/entry-client/mount.tsx`,
  `node_modules/solid-start/types.ts`,
  `node_modules/solid-start/islands/router.ts`,
  `node_modules/solid-start/vite/plugin.d.ts`,
];

tsFilesToIgnore.forEach((file) => {
  const data = fs.readFileSync(file);
  const fd = fs.openSync(file, 'w+');
  const insert = Buffer.from('// @ts-nocheck\n');
  fs.writeSync(fd, insert, 0, insert.length, 0);
  fs.writeSync(fd, data, 0, data.length, insert.length);
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});

const solidStartDir = `node_modules/solid-start`;

sjs.mkdir('-p', `${solidStartDir}/env`);
sjs.mv(`${solidStartDir}/env.d.ts`, `${solidStartDir}/env/index.d.ts`);
