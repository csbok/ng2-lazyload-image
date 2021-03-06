## ng2-lazyload-image

> Lazy image loader for Angular 2

[![Build Status](https://travis-ci.org/tjoskar/ng2-lazyload-image.svg?branch=master)](https://travis-ci.org/tjoskar/ng2-lazyload-image)

About 90 loc and no dependencies (except for ng2 and rxjs of course)

Demo: http://tjoskar.github.io/ng2-lazyload-image/

### Installation
```
$ npm install ng2-lazyload-image --save
```

### Usages

```javascript
import {Component} from 'angular2/core';
import {LazyLoadImageDirective} from 'ng2-lazyload-image';

@Component({
    selector: 'image',
    template: `
        <img [src]="defaultImage" [lazyLoad]="image" [offset]="offset">
    `,
    directives: [LazyLoadImageDirective]
})
class ImageComponent {
    defaultImage = 'https://www.placecage.com/1000/1000';
    image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
    offset = 100;
}
```

See example folder for more usages.

### Develop
Run `e2e` tests:
```
$ npm run webdriver:update
$ npm run e2e
```
