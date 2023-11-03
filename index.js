#!/usr/bin/env node

import express from "express";
import meow from "meow";

const cli = meow(
  `
  Usage
    $ live-serve-cli

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
        type: "boolean",
        shortFlag: "h",
      },
      port: {
        type: "number",
        shortFlag: "p",
        default: 80, // Set a default port
      },
      host: {
        type: "string",
        shortFlag: "ho",
        default: "localhost", // Set a default host
      },
      dir: {
        type: "string",
        shortFlag: "d",
        default: "./", // Set a default directory
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

  app.listen(port, host, () => {
    console.log(
      `Server is running and serving ${dir} at http://${host}:${port}`
    );
  });
}
