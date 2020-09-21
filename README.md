# Instructions

- git init
  - touch .gitignore README.md index.js
- yarn init

## Local publish

- yarn version
  - Auto commit in git
- Add preversion, postversion, postpublish hooks in [package.json](package.json)
  - `~/.yarnrc`
    ```yarnrc
    ...
    email "1174980997@qq.com"
    lastUpdateCheck ...
    username josaber
    ```
    - Input password everytime when `yarn publish`
  - `npm adduser`
    - Generate token in `~/.npmrc`
    ```npmrc
    ...
    //registry.npmjs.org/:_authToken=<TOKEN>
    ```
    - [Access token](https://www.npmjs.com/settings/josaber/tokens/)
      - Generate token to publish

## CI publish

# [jsDelivr](http://www.jsdelivr.com/)

- [jsDelivr npm CDN](https://cdn.jsdelivr.net/npm/jsdelivr-npm/index.js) to get the index.js file.
  - https://cdn.jsdelivr.net/npm/package[@version]/[file]
- [jsDelivr gh CDN](https://cdn.jsdelivr.net/gh/o-space/jsdelivr-npm/) to get the file list.
  - https://cdn.jsdelivr.net/gh/user/repo[@branch/commit/release(tag)]/[file]
