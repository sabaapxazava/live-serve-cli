# live-serve-cli

A simple Node.js CLI to serve static files with Express.

## Installation

You can install this CLI globally using npm or yarn.

```bash
npm install -g live-serve
```

Or

```bash
yarn global add live-serve
```

## Usage

To start serving static files, open your terminal and run the following command:

```bash
live-serve-cli
```

By default, the CLI will serve static files from the current directory, using the host 'localhost' and port '80'.

You can customize the behavior of the CLI using the following options:

- --help, -h: Show this help message.

- --port, -p: Set a custom port (default is 80).

- --host, -ho: Set a custom host (default is localhost).

- --dir, -d: Set a custom directory (default is the current directory).

## Examples

Serve static files from a custom directory on port 8080:

```bash
live-serve-cli --port 8080 --dir /path/to/your/directory
```

Serve static files from a custom directory on a specific host and port:

```bash
live-serve-cli --host myhostname --port 8080 --dir /path/to/your/directory
```

## Acknowledgments

- Express for making it easy to create a web server.
- Meow for simplifying command-line argument parsing.

## Author

[sabaapxazava](https://github.com/sabaapxazava)

## Contact

For any questions or feedback, feel free to contact me at contact@sabaapkhazava.ge.
