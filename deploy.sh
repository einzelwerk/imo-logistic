set -e

git add .
git commit -m "Deploy $1"
git push origin master
git push origin2 master
git add dist -f
git subtree push --prefix dist origin gh-pages
git subtree push --prefix dist origin2 gh-pages

