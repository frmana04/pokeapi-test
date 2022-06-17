import {createImage} from '../helpers/load-image.js';

export class Element {

    constructor(urlImage,position,size){


        this.position = position;
        this.size = size;
        this.image = createImage(urlImage)
        .then(( image=>{ this.image=image
         
        }))
        .catch( err =>{console.log(err)})
    }

  

}