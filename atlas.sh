echo "Build Project"

npm run build

echo "Manage Worktree"


git worktree add --no-checkout --detach -f ./package
cp package.json ./package
cp -R dist/ ./package

echo "Commit and push"

cd package/
git switch -c dist
git add .
git add package.json
git commit -m "package"
git tag -a next-7 -m "next by wycliffepeart"
git push origin next-7

echo "Worktree cleanup"

git worktree remove -f ./package