# headings

Bookmarklet for generating heading structure.

```
javascript:%20void%20function()%7Blet%20map=%22%22;for(const%20e%20of%20document.querySelectorAll(%22h1,%20h2,%20h3,%20h4,%20h5,%20h6%22))if(e.clientHeight%3E0)%7Bconst%20t=parseInt(e.tagName.match(/%5Cd/)%5B0%5D);map+=new%20Array(t).fill(%22-%22).join(%22%22)+e.tagName.toLowerCase()+%22:%20%22+e.innerText.replace(/%5Cn/g,%22%22)+%22%5Cn%22%7Dconsole.log(map);%7D()
```
