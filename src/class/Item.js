import {createImage} from '../helpers/load-image.js'
import {Element} from './Element.js'
import {ctx} from '../index.js'
import  {ct}  from '../helpers/constants.js'

export class Item extends Element{


    constructor(urlImage,position,size,points,type){


        return (async ()=> {

            super(urlImage,position,size);
            this.points=points;
            this.type= type;
            this.image = await createImage(urlImage)
            return this;
        }) ()       
    }

    draw() {
        
        ctx.drawImage(this.image,this.position.x,this.position.y,ct.UNIT_MAP,ct.UNIT_MAP,);

    }
}

