#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ankit/vue-photos.git master:gh-pages

cd -
