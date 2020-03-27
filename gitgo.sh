#! /bin/bash

echo "Adding current dir"
git add . 
message='Insert Commit Message: '
echo $message
read commsg
echo "committing message"
git commit -m "$commsg"
echo "Push changes? (Y/y-- anything else for no)"
read ansr
if [ $ansr == 'y' -o $ansr == 'Y' ] ; then
    echo "Pushing!!!!"
    git push
else
    echo "Only committed "
fi