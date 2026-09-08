# devmeetmaker

Express and MongoDB development scaffold. The API routes currently return
placeholder text; registration and authentication are not implemented yet.

Use Node.js 22 or newer and install the locked dependencies:

```sh
npm ci
NODE_CONFIG='{"mongoURI":"mongodb://127.0.0.1:27017/devmeetmaker"}' npm start
```

Run a local MongoDB instance first. The server listens on port 5000 by default;
`PORT` changes it. Supply connection strings through configuration outside Git.
The Mongoose 8 connection uses its current default options.

See [MAINTENANCE.md](MAINTENANCE.md) for dependency checks and update policy.
