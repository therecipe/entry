#!/bin/bash
set -e

REPO=therecipe/entry
AUTH_HEADER="Authorization: token ${GITHUB_SECRET}"


response=$(curl -sSL -H "$AUTH_HEADER" "https://api.github.com/repos/${REPO}/releases")
eval $(echo "$response" | grep -m 1 "id.:" | grep -w id | tr : = | tr -cd '[[:alnum:]]=')
[ "$id" ] || { echo "Error: Failed to get release id for tag: $tag"; echo "$response" | awk 'length($0)<100' >&2; }
curl -sSL -H "$AUTH_HEADER" -XDELETE "https://api.github.com/repos/${REPO}/releases/$id"
curl -sSL -H "$AUTH_HEADER" -XPOST --data '{ "tag_name": "v0.0.0", "target_commitish": "master", "name": "v0.0.0", "body": "", "draft": false, "prerelease": true }' --header "Content-Type: application/json" "https://api.github.com/repos/${REPO}/releases"


response=$(curl -sSL -H "$AUTH_HEADER" "https://api.github.com/repos/${REPO}/releases")
eval $(echo "$response" | grep -m 1 "id.:" | grep -w id | tr : = | tr -cd '[[:alnum:]]=')
[ "$id" ] || { echo "Error: Failed to get release id for tag: $tag"; echo "$response" | awk 'length($0)<100' >&2; }

for file in $(find ./deploy -name "*.zip"); do
  echo "uploading $file"
  curl -sSL -H "$AUTH_HEADER" -XPOST --upload-file "$file" --header "Content-Type:application/octet-stream" "https://uploads.github.com/repos/${REPO}/releases/$id/assets?name=$(basename $file)" > /dev/null
done


git config --global user.email "therecipe@users.noreply.github.com"
git config --global user.name "therecipe"

git branch -D gh-pages || true
git checkout --orphan gh-pages && mv ./deploy/entry_wasm.zip .. && rm -rf * && rm -f .gitignore && mv ../entry_wasm.zip . && unzip entry_wasm.zip && rm -f entry_wasm.zip
git add . && git commit -m "initial commit" && git push -f https://${GITHUB_SECRET}@github.com/${REPO}.git gh-pages