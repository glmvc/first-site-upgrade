# :crystal_ball: first-site-upgrade

## :flying_saucer: ... and with this website project i learn and challenge myself on my journey as a web developer

### :seedling: also this should be an *inspiration* and *resource* for anyone looking to get into or is just getting started with web development

- #### visit the [first site upgrade website](https://glmvc.github.io/first-site-upgrade/ "first site upgrade website") and see for yourself :eyes:

- #### check the [changelog on github](changelog.md "first site upgrade changelog on github") or on the [changelog page on the website](https://glmvc.github.io/first-site-upgrade/ "first site upgrade changelog") to see what has changed / been improved compared to the [first-site](https://github.com/glmvc/first-site/ "first site website") :clipboard:

- #### do you notice anything that's wrong, not ideal or doesn't follow good practice? :face_with_spiral_eyes:

    - let me know in a message or create an issue
    - or fix it yourself and create a pull request afterwards
    - i try very hard to implement everything with perfection, but as we all know 4 eyes see more than 2 and one cannot know everything
    - i'm always open for further suggestions / ideas

---

#### :twisted_rightwards_arrows: current workflow

##### prerequisite knowledge

- the principles of [open source](https://opensource.org/ "open source homepage") and code licensing
    - [open source etiquette](https://developer.mozilla.org/en-US/docs/MDN/Community/Open_source_etiquette/ "open source etiquette article on mdn")
- [git](https://git-scm.com/ "git homepage") and [github](https://github.com/ "github homepage")
    - [get started with github](https://docs.github.com/en/get-started "github get started documentation")
- web technologies (at the moment mainly html, css and javascript)
    - [learn web development](https://developer.mozilla.org/en-US/docs/Learn/ "learn web development article on mdn")
- integrated development environments (ides)
    - [visual studio code](https://code.visualstudio.com/ "visual studio code homepage") is strictly advised for this project at the moment

##### setting up git and github

1. first you'll need to [download](https://git-scm.com/downloads/ "download git"), [install](https://github.com/git-guides/install-git/ "github install git guide") and **[set up](https://docs.github.com/en/get-started/quickstart/set-up-git/ "set up git on github docs")** git on your local working machine
    - you should set your [user.name](https://docs.github.com/en/get-started/getting-started-with-git/setting-your-username-in-git/ "setting your username in git on github docs") and [user.email](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address/ "setting your commit email address on github docs")
    - make sure to configure how your local system should [handle line endings](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings/ "configuring git to handle line endings on github docs") - for this project set core.autocrlf to `input` on macOS / Linux and `true` on Windows
2. after that, you'll need a [github account](https://github.com/join/ "join github") to contribute to this project (skip this step if you're already familiar with github)
    - [create and set up your github account](https://docs.github.com/en/get-started/onboarding/getting-started-with-your-github-account/ "getting started with your github account on github docs")
3. now you're all set to make *small* and *simple* changes to files of this project using the [github ui](https://docs.github.com/en/repositories/working-with-files/managing-files/ "working with files on github docs")

##### get ready to work with files, git and github

for *more complex* changes and tasks you'll have to use [git](https://git-scm.com/doc/ "git documentation") or a client like [github desktop](https://docs.github.com/en/get-started/using-github/github-desktop/ "github desktop on github docs") or [github cli](https://docs.github.com/en/get-started/using-github/github-cli/ "github cli on github docs").

The following steps use **git on the command line**, but if you're already familiar with one of the clients mentioned above, feel free to use the one you prefer.

1. [create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo/ "fork a repo on github docs") of the project repository (*"copy" the project on github*)

2. [clone the forked repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository "cloning your forked repository on github docs") from the first step to your local working machine (*"download" the copied project from github*)

    ```bash
    # navigate to a directory of your choice
    $ cd ~/web-dev/repos

    # clone your fork of the repository
    $ git clone https://github.com/YOUR-USERNAME/YOUR-FORK.git

    # your local clone will be created
    > Cloning into 'first-site-upgrade'...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remote: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
    ```

3. [create a remote](https://docs.github.com/en/get-started/quickstart/fork-a-repo#configuring-git-to-sync-your-fork-with-the-upstream-repository "configuring git to sync your fork on github docs") to be able to keep your fork up-to-date (*create a "shortcut" to the original repository*)

    ```bash
    # make sure to start in your clone directory
    $ cd ~/web-dev/repos/first-site-upgrade

    # add a remote repository called upstream for your fork
    $ git remote add upstream https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git

    # verify the new upstream remote you have specified
    # (when a repository is cloned, git automatically adds a remote called origin that points to your fork / the "parent" repository)
    $ git remote -v
    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (fetch)
    > origin    https://github.com/YOUR-USERNAME/YOUR-FORK.git (push)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (fetch)
    > upstream  https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY.git (push)
    ```

##### working with files, git and github

1. [sync your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork/ "syncing a fork on github docs") often to keep it up-to-date with the upstream (original) repository to avoid conflicts

    ```bash
    # make sure to start in your clone directory
    cd ~/web-dev/repos/first-site-upgrade

    # checkout your fork's local default branch - for this project "main"
    git checkout main

    $ git fetch upstream
    > remote: Counting objects: 75, done.
    > remote: Compressing objects: 100% (53/53), done.
    > remote: Total 62 (delta 27), reused 44 (delta 9)
    > Unpacking objects: 100% (62/62), done.
    > From https://github.com/ORIGINAL-OWNER/ORIGINAL-REPOSITORY
    >  * [new branch]      main     -> upstream/main
    ```

##### checklist before releasing the work

---

#### :battery: pagespeed

![pagespeed insights performance](assets/pagespeed-dark.svg#gh-dark-mode-only)

![pagespeed insights performance](assets/pagespeed-light.svg#gh-light-mode-only)

> [pagespeed insights](https://developers.google.com/speed/docs/insights/v5/about/ "about pagespeed insights") (psi) reports on the performance of a page on both mobile and desktop devices, and provides suggestions on how that page may be improved.

---

#### :toolbox: used tools, libraries and inspiration for the project

- you don't need to *go and reinvent the wheel* :ferris_wheel:

- this is meant to be a **motivation** that you can and even should use other resources as well, since it's very hard to do everything yourself these days in this *fast-paced industry* :joystick:

    - [html / css style guide](https://google.github.io/styleguide/htmlcssguide.html "google html / css style guide")
    - [frontend checklist](https://frontendchecklist.io/ "the front-end checklist website")
    - [design system (guidelines / inspiration)](https://material.io/ "google material design homepage")
    - [normalize css](http://necolas.github.io/normalize.css/ "normalize.css homepage")
    - [google webfonts helper](https://google-webfonts-helper.herokuapp.com/fonts/ "google webfonts helper website")
    - [clamp calculator](https://royalfig.github.io/fluid-typography-calculator/ "royalfig clamp calculator for a fluid typography scale")
    - [jquery library](https://jquery.com/ "jquery homepage")
    - [favicon generator](https://favicon.io/ "favicon.io homepage")
    - [svg background](https://bgjar.com/ "bgjar homepage")
    - [svg icons](https://fontawesome.com/ "font awesome homepage")
    - [background gradient generator](https://cssgradient.io/ "css gradient homepage")
    - [typewriter effect inspiration](https://www.30secondsofcode.org/css/s/typewriter-effect/ "30 seconds of code typewriter effect tutorial")
    - [nav icon inspiration](https://codepen.io/ahmadbassamemran/pen/VQwPGr/ "hamburger icons animations by ahmad emran on codepen")
    - [glitch effect tutorial](https://www.youtube.com/watch?v=7Xyg8Ja7dyY/ "animated glitch text effect by kevin powell on youtube")
    - [image editor](https://www.photopea.com/ "photopea advanced image editor in the browser")
    - [image compression tool](https://tinypng.com/ "tinypng homepage")
    - [image map resizer library](https://github.com/davidjbradshaw/image-map-resizer/ "image map resizer github repository by davidjbradshaw")
    - [button styling inspiration](https://uiverse.io/ "uiverse homepage")
    - [prismjs syntax highlighter library](https://prismjs.com/ "prismjs homepage")
    - [html escape tool](https://codebeautify.org/html-escape-unescape/ "codebeautify html escape / unescape tool")
    - [markdown to html converter](https://codebeautify.org/markdown-to-html/ "codebeautify markdown to html converter tool")
    - [css autoprefixer](https://autoprefixer.github.io/ "css autoprefixer online tool")
    - [pagespeed insights svg api](https://github.com/ankurparihar/readme-pagespeed-insights/ "pagespeed insights for readme github repository by ankurparihar")

> created along with the great and beginner-friendly learning resource ["front-end web developer learning pathway"](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer/ "front-end web developer article on mdn") from the [MDN Web Docs](https://developer.mozilla.org/ "mdn web docs homepage") (previously Mozilla Developer Network and formerly Mozilla Developer Center)
