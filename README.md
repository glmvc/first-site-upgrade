# 🔮 first-site-upgrade

## 🛸 ... and with this website project i learn and challenge myself on my journey as a web developer

### 🌱 also this should be an *inspiration* and *resource* for anyone looking to get into or is just getting started with web development

- #### visit the [first site upgrade website](https://glmvc.github.io/first-site-upgrade/ "first site upgrade website") and see for yourself 👀

- #### check the [changelog on github](changelog.md "first site upgrade changelog on github") or on the [changelog page on the website](https://glmvc.github.io/first-site-upgrade/ "first site upgrade changelog") to see what has changed / been improved compared to the [first-site](https://glmvc.github.io/first-site/ "first site website") 📋

- #### do you notice anything that's wrong, not ideal or doesn't follow good practice? 😵‍💫
    - let me know in a message or create an issue
    - or fix it yourself and create a pull request afterwards
    - i try very hard to implement everything with perfection, but as we all know 4 eyes see more than 2 and one cannot know everything
    - i'm always open for further suggestions / ideas

---

#### 🔋 pagespeed

![pagespeed insights performance](assets/pagespeed-dark.svg#gh-dark-mode-only)

![pagespeed insights performance](assets/pagespeed-light.svg#gh-light-mode-only)

> [pagespeed insights](https://developers.google.com/speed/docs/insights/v5/about "about pagespeed insights") (psi) reports on the performance of a page on both mobile and desktop devices, and provides suggestions on how that page may be improved.

---

#### 🔀 current workflow

##### prerequisite knowledge 🚧

- the principles of [open source](https://opensource.org/ "open source initiative homepage") and code licensing
    - [open source etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette "open source etiquette article on mdn")
- [git](https://git-scm.com/ "git homepage") and [github](https://github.com/ "github homepage")
    - [get started with github](https://docs.github.com/en/get-started "get started github documentation")
    - [github git guides](https://github.com/git-guides "github git guides")
    - [git cheat sheet](https://training.github.com/ "github git cheat sheets")
- web technologies (at the moment mainly html, css and javascript)
    - [learn web development](https://developer.mozilla.org/en-US/docs/Learn "learn web development article on mdn")
- integrated development environments (ides)
    - [visual studio code](https://code.visualstudio.com/ "visual studio code homepage") is strictly advised for this project at the moment

##### setting up git and github 🏗️

1. first you'll need to [download](https://git-scm.com/downloads "git downloads"), [install](https://github.com/git-guides/install-git "install git github guide") and **[set up](https://docs.github.com/en/get-started/quickstart/set-up-git "set up git github documentation")** git on your local working machine
    - you should set your [user.name](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git "setting your username in git github documentation") and [user.email](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address "setting your commit email address github documentation")
    - make sure to configure how your local system should [handle line endings](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings "configuring git to handle line endings github documentation") - for this project set core.autocrlf to `input` on macOS / Linux or `true` on Windows
2. after that, a [github account](https://github.com/join "join github") is needed to contribute to this project (skip this step if you're already familiar with github)
    - [create and set up your github account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account "getting started with your github account github documentation")
3. now you're all set to make *small* and *simple* changes to files of this project using the [github ui](https://docs.github.com/en/repositories/working-with-files/managing-files "working with files github documentation")

##### get ready to work on the project 🚦

for *more complex* changes and tasks you'll have to use [git](https://git-scm.com/doc "git documentation") or a client like [github desktop](https://docs.github.com/en/get-started/using-github/github-desktop "github desktop github documentation") or [github cli](https://docs.github.com/en/get-started/using-github/github-cli "github cli github documentation")

the following steps use **git on the command line**, but if you're already familiar with one of the clients mentioned above, feel free to use the one you prefer

1. [create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo "fork a repo github documentation") of the project repository (*"copy" the project on github*)

2. [clone the forked repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository "cloning your forked repository github documentation") from the first step to your local machine (*"download" the copied project from github*)

    ```bash
    # navigate to a directory of your choice
    cd ~/web-dev/repos

    # clone your fork of the repository
    git clone https://github.com/YOUR-USERNAME/YOUR-FORK.git

    # your local clone will be created
    > Cloning into 'first-site-upgrade'...
    ```

3. [create a remote](https://docs.github.com/en/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository "configuring git to sync your fork github documentation") to be able to keep your fork up-to-date (*create a "shortcut" to the original repository*)

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # add a remote repository called upstream
    git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git

    # verify the new upstream remote you have specified
    git remote -v

    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)

    # when a repository is cloned, git automatically adds a remote called origin
    # origin points to your fork (the "parent" repository)
    # upstream points to the original repository of the project
    ```

4. open the project folder in your code editor (vs code for this project)

5. vs code will prompt you to install the recommended extensions for the project (if not, search for `@recommended` in the extensions marketplace and install them manually)

##### working on the project 👷‍♀️

1. [sync your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork "syncing a fork github documentation") often to keep it up-to-date with the upstream repository to avoid conflicts or be able to resolve them

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # checkout your local clone's default branch ("main" for this project)
    git checkout main

    # fetch the branches and their respective commits from the upstream repository
    git fetch upstream

    # merge the changes from the upstream default branch (upstream/main) into your local default branch (origin/main)
    # this brings your fork's default branch into sync with the upstream repository, without losing your local changes
    git merge upstream/main

    # syncing your fork only updates your local clone / copy of the repository
    # to update your fork on github, you must push your changes (see next steps)
    ```

    you can update your current local working branch with [git pull](https://github.com/git-guides/git-pull "git pull github guide"), if you haven't made any local changes yet (*local changes will be "overwritten"*)

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # checkout your local clone's default branch ("main" for this project)
    git checkout main

    # update your local working branch with commits from the remote and update all remote tracking branches
    git pull
    ```

2. create a [branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell "git branches in a nutshell from the official git book") for your changes

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # checkout your local clone's default branch ("main" for this project)
    git checkout main

    # create a new branch with a summarizing name of the changes
    git checkout -b YOUR-UPGRADE

    # the command above switches to the specified branch and updates the working directory
    # (it's a "shortcut" for "git branch YOUR-UPGRADE" and "git checkout YOUR-UPGRADE")
    ```

3. make changes, improve, fix - simply code :)

4. check the [checklist](#checklist-before-releasing-the-changes-memo) below before moving on to the next step

5. after finishing your changes, you'll have to [add](https://github.com/git-guides/git-add "git add github guide"), [commit](https://github.com/git-guides/git-commit "git commit github guide") and [push](https://github.com/git-guides/git-push "git push github guide") your changes

    ```bash
    # check that you're on the correct branch
    # if you're not, use "git checkout YOUR-UPGRADE"

    # add all new or changed files in your working directory to the git staging area (for the commit)
    git add .

    # make a commit with a short message describing the changes
    git commit -m "your upgrades fixing an issue"

    # push the commit(s) to the remote branch of your fork
    git push
    # use "git push --set-upstream origin YOUR-UPGRADE" if you haven't pushed this branch before
    # or use "git push origin YOUR-UPGRADE" each time
    ```

6. once your changes are pushed to a branch on your fork, you can propose them with a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request "creating a pull request github documentation") using the github ui - the title and description of the pull request should appropriately and precisely describe your changes

7. the pull request will be reviewed and feedback will be provided
    - it's a common part of the [process](https://docs.github.com/en/get-started/quickstart/github-flow "github flow github documentation") in open source projects that you may be asked questions or be asked to make changes
    - resolve conflicts if your pull request has merge conflicts with the main branch
    - group logical changes in each pull request so that it contains a related set of changes or just a single change

8. finally, when everything is well discussed, correct and fine, the pull request will be merged (the branch will usually no longer be needed and will be deleted afterwards)

###### checklist before releasing the changes 🦺

- [ ] update the source codes in `code.html` using this [html escape tool](https://codebeautify.org/html-escape-unescape "codebeautify html escape / unescape tool") if necessary after your changes
- [ ] make sure to use the [css autoprefixer tool](https://autoprefixer.github.io/ "css autoprefixer online tool") if changing / editing a `css` file

---

#### 🧰 used tools, libraries and inspiration for the project

- you don't need to *go and reinvent the wheel* 🎡

- this is meant to be a **motivation** that you can and even should use other resources as well, since it's very hard to do everything yourself these days in this *fast-paced industry* 🕹️

    - [html / css style guide](https://google.github.io/styleguide/htmlcssguide.html "google html / css style guide")
    - [frontend checklist](https://frontendchecklist.io/ "the front-end checklist website")
    - [design system (guidelines / inspiration)](https://material.io/ "google material design homepage")
    - [normalize css](http://necolas.github.io/normalize.css/ "normalize.css homepage")
    - [google webfonts helper](https://gwfh.mranftl.com/fonts "google webfonts helper website")
    - [clamp calculator](https://royalfig.github.io/fluid-typography-calculator/ "royalfig clamp calculator for a fluid typography scale")
    - [jquery library](https://jquery.com/ "jquery homepage")
    - [favicon generator](https://favicon.io/ "favicon.io homepage")
    - [svg background](https://bgjar.com/ "bgjar homepage")
    - [svg icons](https://fontawesome.com/ "font awesome homepage")
    - [background gradient generator](https://cssgradient.io/ "css gradient homepage")
    - [typewriter effect inspiration](https://www.30secondsofcode.org/css/s/typewriter-effect "30 seconds of code typewriter effect tutorial")
    - [nav icon inspiration](https://codepen.io/ahmadbassamemran/pen/VQwPGr "hamburger icons animations by ahmad emran on codepen")
    - [glitch effect tutorial](https://www.youtube.com/watch?v=7Xyg8Ja7dyY "animated glitch text effect by kevin powell on youtube")
    - [image editor](https://www.photopea.com/ "photopea advanced image editor in the browser")
    - [image compression tool](https://tinypng.com/ "tinypng homepage")
    - [image map resizer library](https://github.com/davidjbradshaw/image-map-resizer "image map resizer github repository by davidjbradshaw")
    - [button styling inspiration](https://uiverse.io/ "uiverse homepage")
    - [prismjs syntax highlighter library](https://prismjs.com/ "prismjs homepage")
    - [html escape tool](https://codebeautify.org/html-escape-unescape "codebeautify html escape / unescape tool")
    - [markdown to html converter](https://codebeautify.org/markdown-to-html "codebeautify markdown to html converter tool")
    - [css autoprefixer](https://autoprefixer.github.io/ "css autoprefixer online tool")
    - [pagespeed insights svg api](https://github.com/ankurparihar/readme-pagespeed-insights "pagespeed insights for readme github repository by ankurparihar")

> created along with the great and beginner-friendly learning resource ["front-end web developer learning pathway"](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer "front-end web developer article on mdn") from the [MDN Web Docs](https://developer.mozilla.org/ "mdn web docs homepage") (previously Mozilla Developer Network and formerly Mozilla Developer Center)
