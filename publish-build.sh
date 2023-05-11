npm run build
cd build

git init
git add -A
git commit -m 'Pushed new app build'
git push -f https://github.com/WhtsPoint/amo-labs.git master:build
