# ts-arrayx: Array Extensions for Typescript (and JS!)

[![codecov](https://codecov.io/gh/neonredwood/ts-arrayx/branch/master/graph/badge.svg?token=AZY76O9W8Y)](https://codecov.io/gh/neonredwood/ts-arrayx)

[![npm version](https://badge.fury.io/js/@neonredwood%2Fts-arrayx.svg)](https://badge.fury.io/js/@neonredwood%2Fts-arrayx)

This module aims to add useful enhancements to the default Javascript and Typescript Array class, in order to help produce more succinct and pragmatic code.

Many of the functions here are influenced by Scala's rich library for array and list manipulation.

## Installation

```bash
npm install @neonredwood/ts-arrayx
```

## Usage

The simplest way to start using these extensions is simply to add this import to the top of a file:

```typescript
import "@neonredwood/ts-arrayx";

// results is 6
[0, 1, 2, 3].sum();
```

This will automatically include access to all functions, by (naughty!) adding to the `Array.prototype`.

You can also import functions you need individually:

```typescript
import "@neonredwood/ts-arrayx/sliding";

// result is [[1, 2], [2, 3]]
[1, 2, 3].sliding(2);
```

## Documentation

See the documentation [here](https://neonredwood.github.io/ts-arrayx/).
