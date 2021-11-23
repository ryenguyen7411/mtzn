# Project Mtzn

This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Technology Lookup

- [NextJS](https://nextjs.org/) latest version.
- [ReactJS 17](https://reactjs.org/) as renderer.
- [ReduxJS](https://redux.js.org/) for predictable data management (through [Redux Toolkit](https://redux-toolkit.js.org/)).
- [Immer](https://immerjs.github.io/immer/) for immutability.
- [ESLint](https://eslint.org/) + [Stylelint](https://stylelint.io/) for enforcing code styling + formatting.
- [Tailwind CSS](https://tailwindcss.com/) + [SASS](https://sass-lang.com/) for better styling throughout project.

## Infrastructure

We choose **Clean architecture** to setup the project with heavy scalable ability in mind. Some cool stuffs Clean architecture bring us:

1. Independent of framework & driver.
2. Abstract layers: UI, use cases, repo, infra, ...
3. Testable.

More info: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html

In our project, there're 4 layers in the infrastructure:

1. UI layer, which do not know about anything but use cases of business.
2. Usecase layer, know which data to distribute between UI layer and Repo layer, but do not know how the data was distributed.
3. Repo layer, do not know about UI. It's mostly fetch data from external sources like API, web storages, RSS feed, ...; then ask Storage to store them globally for the project.
4. Infra layer, including but not limited to rendering, routing, storage, SEO, ..., provide the ability to be independent on any frameworks, libraries.

# Development setup

## Using Docker

`TODO`

## Setup locally

Prerequisite:

1. macOS, Linux and Windows (including WSL) are supported.
2. NodeJS v12.22.0 or later.
3. Yarn for dependencies installing (You could use NPM instead, but Yarn is preferred for fast package intallation).

### Cloning project

```
$ git clone git@github.com:ryenguyen7411/mtzn.git
$ cd mtzn
```

### Dependencies installing

```
$ yarn install
```

### Start project in development mode

```
$ yarn dev
```

or if you need to use custom port instead (default port is 3000):

```
$ PORT=xyz yarn dev
```

> Please note that running in different port might cause API not working, due to CORS.

Then go to `http://localhost:{PORT}` on your local machine. You should see the project correctly bootstrapping.

# Production mode

`TODO`
