$ echo $PATH
When debugging path issues, it's best to first run heroku with the absolute path. For example if it's in C:\Program Files\Heroku\bin\heroku then you can run in Git Bash with:

$ /c/Program\ Files/Heroku/bin/heroku login
If this works (and it should), then you can add it to PATH like this:

$ PATH="$PATH:/c/Program\ Files/Heroku/bin"Files\Heroku\bin;%PATH%"


$ heroku update
$ heroku login
OR
$ winpty heroku login -i