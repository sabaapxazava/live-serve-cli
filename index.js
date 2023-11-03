#!/usr/bin/env node

import express from 'express';
import meow from 'meow';
import serveIndex from 'serve-index';

const cli = meow(
  `
  Usage
    $ live-serve

  Options
    --help, -h     Show this help message
    --port, -p     Set custom port (default: 80)
    --host, -ho    Set custom host (default: localhost)
    --dir, -d      Set custom directory (default: current directory)
`,
  {
    importMeta: import.meta,
    flags: {
      help: {
        type: 'boolean',
        shortFlag: 'h',
      },
      port: {
        type: 'number',
        shortFlag: 'p',
        default: 80,
      },
      host: {
        type: 'string',
        shortFlag: 'ho',
        default: 'localhost',
      },
      dir: {
        type: 'string',
        shortFlag: 'd',
        default: './',
      },
    },
  }
);

if (cli.flags.help) {
  cli.showHelp();
} else {
  const { dir, port, host } = cli.flags;

  const app = express();

  // Serve static files from the specified directory
  app.use(express.static(dir));

  // Use serve-index to list files if no index.html is found
  app.use(serveIndex(dir, { icons: true }));

  app.listen(port, host, () => {
    console.log(`Server is running and serving ${dir} at http://${host}:${port}`);
  });
}
