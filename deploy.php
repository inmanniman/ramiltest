name: Deploy to GitHub Pages

on:
push:
branches:
- main

jobs:
deploy:
runs-on: ubuntu-latest

steps:
- name: Checkout the repository
uses: actions/checkout@v2

- name: Build project
run: |
mkdir -p public
cp -r * public

- name: Deploy to GitHub Pages
uses: peaceiris/actions-gh-pages@v3
with:
github_token: ${{ secrets.GITHUB_TOKEN }}
publish_dir: ./public