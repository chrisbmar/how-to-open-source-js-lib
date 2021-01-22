# How to open source a JS lib to NPM with automatic releasing

A tutorial by Kent C. Dodds that can be found [here](https://egghead.io/courses/how-to-write-an-open-source-javascript-library). At the point of taking the tutorial, it was outdated by 5 years. Most of the principles remain the same with regards to [semantic-release](https://github.com/semantic-release/semantic-release), [commitizen](https://github.com/commitizen/cz-cli) and [publishing to NPM](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

However, I've used Github Actions with workflow templates for CI as opposed to Travis in the tutorial. Code coverage is reported to codeclimate instead of codecov. Husky has been used as a pre-commit hook instead of git-hooks, and lint-staged has also been added.

[![build](https://img.shields.io/github/workflow/status/chrisbmar/how-to-open-source-js-lib/Node.js%20CI)](https://github.com/chrisbmar/how-to-open-source-js-lib/actions?query=workflow%3A%22Node.js+CI%22)
[![codeclimate](https://img.shields.io/codeclimate/coverage/chrisbmar/how-to-open-source-js-lib)](https://codeclimate.com/github/chrisbmar/how-to-open-source-js-lib)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)