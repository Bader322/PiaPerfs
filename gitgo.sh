#! /bin/bash

echo "Adding current dir"
git add . 
message='Insert Commit Message: '
echo $message
read commsg
echo "committing message"
git commit -m "$commsg"
git push