## Attempts at logic - Personal Blog

Powered by [Hugo](https://gohugo.io/) and [tomfran/typo](https://github.com/tomfran/typo)

### Instructions for myself

The Typo theme is added as submodule as is common practice in Hugo projects

#### Cloning

To clone with theme included

```
git clone --recurse-submodules
```

or after cloning

```

git submodule init
git submodule update

```

#### Updating theme

```
cd themes/typo
git pull origin main  
```

Commit updated changes in theme to main repo

```
git add themes/typo
git commit -m "Update typo theme submodule"
```
