echo "Build Project"

npm run build

echo "Manage Worktree"

git worktree add --no-checkout --detach ./package
cp package.json ./package
cp .github/ ./package -r
cp dist/ ./package -r

echo "Commit and push"

cd package/
git switch -c dist
git add .github/
git add dist/
git add package.json
git commit -m "package"
git tag -a next-2 -m "next by wycliffepeart"
git push origin next

echo "Worktree cleanup"

git worktree remove ./package -f