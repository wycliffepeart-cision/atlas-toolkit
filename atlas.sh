echo "Build Project"

npm run build

echo "Manage Worktree"


git worktree add --no-checkout --detach -f ./package
cp package.json ./package
cp -R dist/ ./package

echo "Commit and push"

cd package/
git switch -c dist
git add dist/
git add package.json
git commit -m "package"
git tag -a next-5 -m "next by wycliffepeart"
git push origin next-5

echo "Worktree cleanup"

rm -rf package
git worktree remove -f ./package