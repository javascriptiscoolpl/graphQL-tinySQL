if [ ! -d "./node_modules" ]; then
  npm install;
  cat ./ignore.template > ./.gitignore;
  cat ./ignore.template > ./.npmignore;
fi
