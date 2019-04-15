# codinglove-scraper
Scraper for thecodinglove.com to get the top programming memes

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
