hugo-uno-dark
========

The dark side of uno, a responsive hugo theme based on [hugo-uno](https://github.com/fredrikloch/hugo-uno).

How dose this theme look like? Check [my blog](https://krazycavin.github.io)

### How to enable resume page?

To enable the access to resume page, it needs to put the path of resume in **config.toml**:
```
resume = "/resume"

```
In this case, the path to put resume content is **content/resume/**

Then create **resume** folder and put **_index.md** file in it. An example of **_index.md** file can be found in **example** folder.

### What's the format of _index.md for resume?

```
---
title: "<page title>"
contact: true|false
author: true|false
twitter: true|false
github: true|false

experience:
    exp1:
        title: Full-stack Batman
        name: Wayne Manor
        date: Jan 1939 - Now
        location: Gotham City
        web: https://en.wikipedia.org/wiki/Batman
        memo: [
            "I'm batman",
            "I wear a mask",
            "Save the world (part-time)",
            "..."
        ]
    exp2:
        title: unknown
        date: unknown
        location: unknown
        web: unknown
        memo: []

education:
    edu1:
        title: self-educated
        name: unknown
        date: everyday
        location: Gotham City
        web: https://en.wikipedia.org/wiki/Gotham_City

language:
    lang1:
        type: Human language
        language: Human
---

<introduction>
```

Multiple **experience** (exp1, exp2...), **education** (edu1, edu2...) and **language** (lang1, lang2...) are supported.

**introduction** part will be rendered and displayed above experience part.

### What's the format of config.toml?

This config.toml should be placed in hugo root folder. An example of **config.toml** can be found in **example** folder.

```
languageCode = "en-us"
title = ""
baseURL = ""
enableEmoji = true
MetaDataFormat = "yaml"

[permalinks]
  post= "/:year/:month/:day/:filename/"

[indexes]
  category = "categories"
  tag = "tags"

[Params]
  author = ""
  github = ""
  twitter = ""
  email = ""
  logo = "/images/<profile-image>"
  cover = "/images/<cover-image>"
  resume = "/resume"
  description = ""
  address = ""
  cv = "/resume/<filename>"
  medium = ""
  instagram = ""
  analytics = ""
  unsplash = ""
  xing = ""
  flickr = ""
  fivehundredpx = ""
  disqus = ""
```
