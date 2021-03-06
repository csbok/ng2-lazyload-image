import {Component} from 'angular2/core';
import {ImageComponent} from './image.component';

@Component({
    selector: 'my-app',
    template: `
        <image *ngFor="#image of images" [src]="image"></image>
    `,
    directives: [ImageComponent]
})
class AppComponent {

    images = [
        'https://images.unsplash.com/photo-1431887773042-803ed52bed26?fm=jpg',
        'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg',
        'https://images.unsplash.com/photo-1448960968772-b63b3f40dfc1?fm=jpg',
        'https://images.unsplash.com/photo-1432256851563-20155d0b7a39?fm=jpg'
    ];

}

export {AppComponent};
