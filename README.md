# Component library

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app for local development.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app to the `dist` folder, ready to be published or locally tested as a library.

## Local testing with Yalc

For local testing our library withou the necessity to publish to npm, you can use a small local repository called `yalc`\
You can find complete documentation [here](https://github.com/wclr/yalc).

### `Instalation`

Using NPM:

```
npm i yalc -g
```

Using Yarn:

```
yarn global add yalc
```

### `Publishing built version to local repository`

You can publish current built version of this library using:

```
yalc push --sig
```

It will copy all the files that should be published in remote NPM registry. We are using `--sig` flag, to ensure that the dependent project knows, that something has changed. Otherwise it will keep the last imported version in cache and not propagate current changes.

### `Import local library`

To import our published library into dependent project you can use:

```
yalc link <library-name>
```

### `Remove imported library`

To remove the imported library you can use:

```
yalc remove <library-name>
```

alternatively to remove all imported libraries use:

```
yalc remove --all
```
