
import { Pacman } from "./Pacman.js";
import { Map } from "./Map.js";
import {Wall} from "./Wall.js";
import  {ct,map}  from '../helpers/constants.js';
import { Coordenate } from './Coordenate.js';
import {ctx} from '../index.js';


export class Game {

    constructor(canvasSize){

        this.canvasSize = canvasSize;
      
            this.map = new Map({width:this.canvasSize.width-ct.UNIT_MAP*4,height:this.canvasSize.height})
            
            this.map.createMap().then(()=>{

                this.init();
            })    
       
    }

    init(){     
        requestAnimationFrame(this.animate);         
    }

    moveAll(){

            this.map.isCharacterLimit(this.map.pacman)

            this.map.enemies.forEach(enemy=>{
                this.map.isCharacterLimit(enemy)
                this.map.characterCanMove(enemy)
                enemy.move();
            })         
            this.map.characterCanMove(this.map.pacman)

            this.map.pacman.move();
            
    }
   
isGameOver(){

    return this.map.pacman.lifes==0;
}
    

  

drawInfo(){
    ctx.font = "20px Arial";
    ctx.fillStyle = "white";

    ctx.fillText("Points:", this.canvasSize.width-ct.UNIT_MAP*3.5, 50);
    ctx.fillText(this.map.pacman.points, this.canvasSize.width-ct.UNIT_MAP*2, 50);

    ctx.fillText("Lifes:", this.canvasSize.width-ct.UNIT_MAP*3.5, 150);
    ctx.fillText(this.map.pacman.lifes, this.canvasSize.width-ct.UNIT_MAP*2, 150);

}

    animate=()=>{
        
        if (!this.isGameOver()){

            this.map.listenKeydown();
        this.map.moveEnemy();
        this.map.isThereCollision()

        ctx.clearRect(0,0,this.canvasSize.width,this.canvasSize.height);
        this.moveAll();
        this.map.draw(); 
        this.drawInfo();
        requestAnimationFrame(this.animate);         

        }

        else {

            ctx.font = "20px Arial";
            ctx.fillStyle = "white";

          ctx.fillText("GAME OVER", this.canvasSize.width-ct.UNIT_MAP*3.5, 250);
        

        }
        
        
       
    }

}

