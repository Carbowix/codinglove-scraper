# codinglove-scraper
Scraper for thecodinglove.com to get the top programming memes

[![https://nodei.co/npm/codinglove-scraper.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/codinglove-scraper.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/codinglove-scraper)

[![Build Status](https://travis-ci.org/Carbowix/codinglove-scraper.png?branch=master)](https://travis-ci.org/Carbowix/codinglove-scraper)
[![npm version](https://badge.fury.io/js/codinglove-scraper.svg)](https://badge.fury.io/js/codinglove-scraper)
[![Known Vulnerabilities](https://snyk.io/test/github/dwyl/hapi-auth-jwt2/badge.svg?targetFile=package.json)](https://snyk.io/test/github/carbowix/codinglove-scraper?targetFile=package.json)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ccb366a6c59642a3a85d16214273e7f9)](https://www.codacy.com/app/Carbowix/codinglove-scraper?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Carbowix/codinglove-scraper&amp;utm_campaign=Badge_Grade)

## Installation

```bash
npm install --save codinglove-scraper
```

## Examples

```js
const memes = require('codinglove-scraper');

memes.getRandomMeme().then(meme => {
  console.log(meme);
});

/*
  {  
    title: 'When my IDE starts freezing',
    gif: 'https://ljdchost.com/010/AwNF3gA.gif' 
  }
*/
```

```js
const memes = require('codinglove-scraper');

memes.getTrendMemes().then(memeObject => {
  console.log(memeObject);
});

/*
  { memes:
   [ { title: 'When the intern starts his new development',
       gif: 'https://ljdchost.com/036/nBEq44e.gif' },
     { title: 'When I start my code review',
       gif: 'https://ljdchost.com/036/G54jULB.gif' },
     { title: 'When I notice that my coworker forgot to lock his session',
       gif: 'https://ljdchost.com/036/a2osBaY.gif' },
     { title: 'When I think I know how to properly use a framework',
       gif: 'https://ljdchost.com/036/G5adUtJ.gif' } ] }
*/
```

```js
const memes = require('codinglove-scraper');

memes.searchMeme("test").then(result => {
  console.log(result);
});

/*
  { results:
   [ { title: 'When I launch my unit tests',
       gif: 'https://ljdchost.com/036/3DoQpb8.gif' },
     { title: 'When I realize that I’ve mixed up production with test',
       gif: 'https://ljdchost.com/036/SMjC7ZH.gif' },
     { title:
        'When I tell the PM that I’m done with a feature and he launches the unit tests',
       gif: 'https://ljdchost.com/036/NBAq7xi.gif' },
     { title: 'When all my unit tests pass at first launch',
       gif: 'https://ljdchost.com/036/UoL7sXo.gif' } ] }
*/
```
