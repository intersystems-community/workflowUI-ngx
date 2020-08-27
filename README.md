# WorkflowUI-ngx

## Prerequisites

Please set up the [WorkflowAPI](https://github.com/intersystems-ru/WorkflowAPI) project as backend part.

## Using prebuilt version

Download the latest archive from the releases page, unzip and host it with preferred http-server (you can host it as CSP-application with `Unauthenticated` security settings)

## Config

The configuration file is in `assets/config/` directory

## Development

Run `npm install` inside the repo directory if you didn't before. (You should have Node.js and npm installed)

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build yourself

Run `npm install` inside the repo directory if you didn't before. (You should have Node.js and npm installed)

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build-prod` for a production build.



