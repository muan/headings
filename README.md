# Headings

Bookmarklet for generating heading structure.

Create a bookmark with the following:

```js
javascript:%20void%20function()%7Blet%20map=%22%22;for(const%20e%20of%20document.querySelectorAll(%22h1,%20h2,%20h3,%20h4,%20h5,%20h6%22))%7Bconst%20t=getText(e);if(e.clientHeight%3E0&&t)%7Bconst%20n=parseInt(e.tagName.match(/%5Cd/)%5B0%5D);map+=new%20Array(2*(n-1)).fill(%22-%22).join(%22%22)+e.tagName.toLowerCase()+%22:%20%22+t+%22%5Cn%22%7D%7Dfunction%20getText(e)%7Breturn%20e.innerText.replace(/%5Cn/g,%22%22)%7Dconsole.log(map);%7D()
```

View source in [`index.js`](/index.js).

The heading map will be printed out in console like this:

```
h1: github/text-expander-element
h1: Fix example in Chrome #3
--h2: Conversation
----h3: muan commented on Jul 22 • edited
----h3: koddsson left a comment
----h3: haacked commented on Jul 22 • edited
----h3: muan commented on Jul 22
----h3: haacked commented on Jul 22
```

## Why

> > When trying to find information on a lengthy web page, which of the following are you most likely to do first?

> **Navigate through the headings on the page –	68.8%**

> > When navigating a web page by headings, how useful are the heading levels (e.g., "Heading 1", "Heading 2", etc.) to you?

> The usefulness of proper heading structures is very high, **with 86.1% of respondents finding heading levels very or somewhat useful**.

Source: [WebAIM: Screen Reader User Survey #8 Results](https://webaim.org/projects/screenreadersurvey8)

## How

[WebAIM: Semantic Structure](https://webaim.org/techniques/semanticstructure/#contentstructure)

## Development

1. `npm install`
1. Change source in `index.js`
1. `npm run build`
1. Commit changes
