# Mods Manager

> An electron-nuxt project

#### Build Setup

``` bash
# install dependencies
yarn install

# serve app with hot reload
yarn dev

# build electron application for production
yarn build

# lint all JS/Vue component files in `src/`
yarn lint

```

#### Create Self Serve Certificate
```bash
./node_modules/electron-builder/cli.js create-self-signed-cert -p yulbrew
```
#### Release
```bash
export GITHUB_TOKEN=SOMETHING
export CSC_LINK=yulbrew.pfx
yarn build --win --publish always
```
References https://www.electron.build/

---

This project was generated with [electron-nuxt](https://github.com/michalzaq12/electron-nuxt) v1.8.0 using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://github.com/michalzaq12/electron-nuxt/blob/master/README.md).
