# @magic/tags

exports arrays of html and svg elements.

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic/tags.svg
[npm-url]: https://www.npmjs.com/package/@magic/tags
[travis-image]: https://img.shields.io/travis/com/magic/tags/master
[travis-url]: https://travis-ci.com/magic/tags
[appveyor-image]: https://img.shields.io/appveyor/ci/magic/tags/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magic/tags/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic/tags/badge.svg
[coveralls-url]: https://coveralls.io/github/magic/tags
[greenkeeper-image]: https://badges.greenkeeper.io/magic/tags.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic/tags.svg
[snyk-image]: https://snyk.io/test/github/magic/tags/badge.svg
[snyk-url]: https://snyk.io/test/github/magic/tags

#### installation:
```javascript
  npm install @magic/tags
```

#### usage:

##### import
```javascript
import { bodyTags, headTags, svgTags, tags } from '@magic/tags'

console.log(bodyTags) // prints all html body tags
console.log(headTags) // prints all html elements that can only appear outside of the body
console.log(svgTags)  // prints all svg elements
console.log(tags)     // prints all of the above
```

#### changelog

##### 0.0.1
first commit

##### 0.0.2
remove color-profile and switch tags from svg

##### 0.0.3
required node version is >= 13.5.0

##### 0.0.4
bump required node version to 14.2.0

##### 0.0.5
bump required node version to 14.15.4

##### 0.0.6 - unreleased
...
