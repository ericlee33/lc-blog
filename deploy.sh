#!/usr/bin/env sh

# abort on errors
set -e

npm run transform:js
# build
npm run docs:build

# navigate into the build output directory
cd src/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ericlee33/lc-blog.git master:gh-pages

cd -