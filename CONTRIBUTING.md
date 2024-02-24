# 🛰️ contributing guidelines

## 🚧 prerequisite knowledge

- the principles of **[open source](https://opensource.org/ "open source initiative website")** and code licensing
    - [open source etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette "open source etiquette article on mdn")
- version control: **[git](https://git-scm.com/ "git website")** and **[github](https://github.com/ "github website")**
    - [get started with github](https://docs.github.com/en/get-started "get started with github documentation")
    - [github git guides](https://github.com/git-guides "github git guide article")
    - [git cheat sheet](https://training.github.com/ "github training git cheat sheets")
- used **web technologies** (currently mainly [html](https://developer.mozilla.org/en-US/docs/Web/HTML "html resources on mdn"), [css](https://developer.mozilla.org/en-US/docs/Web/CSS "css resources on mdn") and [js](https://developer.mozilla.org/en-US/docs/Web/JavaScript "javascript resources on mdn"))
    - [learn web development](https://developer.mozilla.org/en-US/docs/Learn "learn web development article on mdn")
- integrated development environments (ides)
    - **[visual studio code](https://code.visualstudio.com/ "visual studio code website")** is *strictly advised* for this project

## 🎩 style guide

a **style guide** for files and code has *not yet* been defined

however, the following resources provide a **basis**

- [html/css style guide](https://google.github.io/styleguide/htmlcssguide.html "html/css style guide by google")
- [html/css code guide](https://codeguide.co/ "code guide for html and css by mdo")
- [css guidelines](https://cssguidelin.es/ "css guidelines by harry roberts")
- [cube css](https://cube.fyi/ "cube css methodology")

> the **main goal** is *always* to make the project *look* and *feel* like it was created and maintained by a **single person**

## 🏗️ setting up git and github

1. first you'll need to **[download](https://git-scm.com/downloads "git downloads")**, **[install](https://github.com/git-guides/install-git "install git article on github git guides")**, and **[set up](https://docs.github.com/en/get-started/quickstart/set-up-git "set up git article on github docs")** git on your local working machine
    - you should set your [`user.name`](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git "setting your username in git article on github docs") and [`user.email`](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address "setting your commit email address article on github docs")
    - make sure to configure how your local system should [handle line endings](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings "configuring git to handle line endings article on github docs") - for this project, set `core.autocrlf` to `input` on macOS and Linux or `true` on Windows
2. after that, a **[github account](https://github.com/join "join github")** is needed to contribute to this project (skip this step if you're already familiar with github)
    - [create and set up your github account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account "getting started with your github account article on github docs")
3. now you're all set to make *small* and *simple* changes to files in this project using the **[github ui](https://docs.github.com/en/repositories/working-with-files/managing-files "managing files github documentation")**

## 🚦 getting ready to work on the project

for *more complex* changes and tasks, you'll have to use [git](https://git-scm.com/doc "git documentation"), a client like [github desktop](https://docs.github.com/en/get-started/using-github/github-desktop "github desktop article on github docs"), or the [github cli](https://docs.github.com/en/get-started/using-github/github-cli "github cli article on github docs")

the following steps use **git on the command-line**, but if you're already familiar with one of the options mentioned above, feel free to use the one you prefer

1. **[create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo "fork a repo article on github docs")** of the project repository (*"copy" the project on github*)

2. **[clone the forked repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository "cloning your forked repository section of the fork a repo article on github docs")** from the first step to your local machine (*"download" the copied project from github*)

    ```bash
    # navigate to a directory of your choice
    cd ~/web-dev/repos

    # clone your fork of the repository
    git clone https://github.com/YOUR-USERNAME/YOUR-FORK.git

    # your local clone will be created
    > Cloning into 'first-site-upgrade'...
    ```

3. **[create a remote](https://docs.github.com/en/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository "configuring git to sync your fork with the upstream repository section of the fork a repo article on github docs")** to be able to keep your fork up-to-date (*create a "shortcut" to the original repository*)

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

4. **open the project folder** (clone directory) in your code editor (*vs code for this project*)

5. vs code will prompt you to **install the recommended extensions** for the project (if not, search for `@recommended` in the extensions marketplace and install them manually); these extensions are mandatory for changes in this project
    - **editorconfig** support to override user/workspace settings with settings found in .editorconfig files
    - **prettier** code formatter to format files consistently
    - **live-server** hosts a local server in the workspace to preview web pages with features that depend on specific server technology, such as fetching data from files

## 👷‍♀️ working on the project

1. **[sync your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork "syncing a fork article on github docs")** *often* to keep it up-to-date with the upstream repository to **avoid conflicts** or be able to resolve them

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

    # syncing your fork only updates your local clone of the repository
    # to update your fork on github, you must push your changes (see next steps)
    ```

    you can update your current local working branch with [git pull](https://github.com/git-guides/git-pull "git pull article on github git guides") if you haven't made any local changes yet (*local changes will be "overwritten"*)

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # checkout your local clone's default branch ("main" for this project)
    git checkout main

    # update your local working branch with commits from the remote and update all remote tracking branches
    git pull
    ```

2. **[create a branch](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell "git branching - branches in a nutshell from the official git book")** for your changes and "switch" to it

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

3. now the **actual work** can begin: making changes, improvements, fixes, completing assigned tasks, or implementing requested features

4. *before* moving on to the next step, **[review the checklist](#-checklist)** below

5. *after* completing the work and checking the checklist, you'll have to **[add](https://github.com/git-guides/git-add "git add article on github git guides")**, **[commit](https://github.com/git-guides/git-commit "git commit article on github git guides")**, and **[push](https://github.com/git-guides/git-push "git push article on github git guides")** your changes

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

    when in doubt, you can **[check the status](https://github.com/git-guides/git-status "git status article on github git guides")** of your working directory and staging area with `git status`

6. once your changes are pushed to a branch on your fork, you can propose them with a **[pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request "creating a pull request article on github docs")** using the github ui - the pull request should have a clear title that summarizes the changes and a detailed description that explains them well

7. the pull request will be **reviewed**, and feedback will be provided
    - it's a *common part* of the [process in open source projects](https://docs.github.com/en/get-started/quickstart/github-flow "github flow article on github docs") that you may be asked questions or asked to make adjustments to the changes
    - **resolve conflicts** if your pull request has merge conflicts with the main branch
    - group logical changes in each pull request so that it contains a related set of changes or just a single change

8. finally, when everything is *well-discussed*, *correct*, and *ready to be implemented*, the pull request will be **[merged](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request "merging a pull request article on github docs")** by a reviewer of the repository (the branch will usually no longer be needed and should be deleted afterward)

## 🦺 checklist

*before* releasing the changes, it's *required* to **check the following items**

### ⚙️ general

- [ ] **format code** with the specified formatter
- [ ] **check** and **optimize files** with the appropriate tools
    - [image compression tool](https://tinypng.com/ "tinypng website")
    - [svg optimizer](https://jakearchibald.github.io/svgomg/ "svgomg tool")
    - [font analyzer](https://wakamaifondue.com/ "wakamai fondue font tool")
- [ ] **validate and test changes** with the appropriate tools
    - [w3c validators](https://www.w3.org/developers/tools/ "w3c validators and tools")
    - [pagespeed insights](https://pagespeed.web.dev/ "pagespeed insights tool")
    - [lighthouse](https://developer.chrome.com/docs/lighthouse/overview/ "google chrome lighthouse overview article")
    - [web accessibility](https://wave.webaim.org/ "wave web accessibility evaluation tool")
    - [favicon](https://realfavicongenerator.net/favicon_checker "realfavicongenerator favicon checker")
    - [facebook open graph](https://developers.facebook.com/tools/debug/ "facebook sharing debugger")
    - [twitter card](https://cards-dev.twitter.com/validator "twitter card validator")
    - [webvtt](https://w3c.github.io/webvtt.js/parser.html "live webvtt validator")
- [ ] **browser developer tools** also have a bunch of utilities for testing (performance, accessibility, etc.)
    - [chrome devtools](https://developer.chrome.com/docs/devtools/ "google chrome developer tools")
    - [firefox devtools](https://firefox-source-docs.mozilla.org/devtools-user/ "firefox developer tools")
    - [safari devtools](https://developer.apple.com/safari/tools/ "safari developer tools")
- [ ] **test with javascript disabled** in the browser (`noscript`)
- [ ] the **[404 site](https://glmvc.github.io/first-site-upgrade/404.html "first-site-upgrade 404 site") ([`404.html`](404.html "first-site-upgrade 404 html file on github"))** is a **special site** and *must not* be skipped during testing
- [ ] **test for print**, as sites are also available and styled for it
- [ ] **keep the [changelog (`CHANGELOG.md`)](CHANGELOG.md "first-site-upgrade changelog markdown file on github")** and **[readme (`README.md`)](README.md "first-site-upgrade readme markdown file on github") up-to-date** according to the changes made
    - [pagespeed insights for readme (svg api)](https://github.com/ankurparihar/readme-pagespeed-insights "pagespeed insights for readme github repository")

### `</>` html related changes

- [ ] **validate the final html code** with the [html validator](https://validator.w3.org/ "markup validation service") and resolve warnings and errors if necessary
- [ ] **test the fallbacks** for the `<video>` and `<audio>` by temporarily renaming the tags (e.g., `<novideo>` or `<noaudio>`)

### `{}` css related changes

- [ ] **validate the final css code** with the [css validator](https://jigsaw.w3.org/css-validator/ "css validation service") and resolve warnings and errors if necessary
- [ ] check if **used css properties** are **supported** on [can i use](https://caniuse.com/ "can i use website")[^1]
- [ ] make sure to **prefix css properties** using the [css autoprefixer tool](https://autoprefixer.github.io/ "autoprefixer css online tool")[^1] if necessary

[^1]: [browserslist](https://browsersl.ist/#q=defaults%2C+%3E+0.3%25 "browserslist browser compatibility config for this project"): `defaults, > 0.3%` (global audience coverage: >90%)

### `});` js related changes

- [ ] **check the console** for warnings and errors, and resolve them if necessary
