git status;
echo -e "Please add commit message: \c"; read MSG;
git add .;
git commit -m "${MSG}";
git status;
echo -e "All fine? Submit?: (y) or (n): \c"; read ANS;
if [ "${ANS}" == "y" ]; then
  git push;
fi
