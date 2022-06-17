
import {Coordenate} from './Coordenate.js';
import {ctx} from '../index.js'
import  {ct,map}  from '../helpers/constants.js';
import {Wall} from './Wall.js';
import {Item} from './Item.js';
import {Pacman} from './Pacman.js';
import { Enemy } from './Enemy.js';


export class Map{

    constructor(sizeMap){

        this.map = Array(map.length).fill().map(()=>Array(map[0].length).fill());
        this.walls = [];
        this.enemies = [];
        this.items = [];
        this.pacman=null;
        this.sizeMap = sizeMap;
       
    }




    draw(){
     
      
        this.map.forEach(e1 => {
            e1.forEach(e2 =>{

                if (e2 instanceof Wall || e2 instanceof Item) e2.draw();

            } )
        })

        ctx.fillStyle = 'black';
        this.pacman.draw();
        this.enemies.forEach(enemy=>{
        enemy.draw();})
        ctx.fillRect(19*ct.UNIT_MAP, 9*ct.UNIT_MAP, ct.UNIT_MAP, ct.UNIT_MAP);


    }

      createMap(){
       
        const promises=[]
        return new Promise (async (resolve) =>{





      

        new Pacman('./images/pacman-right.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*19},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,0,3).then(
            data=>{
                this.pacman=data;
            }
        )

        new Enemy('./images/enemy-1-right-fire.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*10},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,1,1).then(
            data=>{
                this.enemies.push(data);

            }
        ),

        new Enemy('./images/enemy-2-right-fire.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*10},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,2,1).then(
            data=>{
                this.enemies.push(data);
            }
        )

        new Enemy('./images/enemy-3-right-fire.png',{x:ct.UNIT_MAP*9,y:ct.UNIT_MAP*10},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},{x:5,y:0},5,3,1).then(
            data=>{
                this.enemies.push(data);
            }
        )
        
        
           map.forEach((e1,posx) => {
           return e1.forEach(async(e2,posy) =>{

                switch (e2){

                    
                    case 1: const wall = new Wall({x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},ct.COLOR_WALL)
                            promises.push( wall);
                            
                    break
                   
                    case 0: promises.push({});break;
                    case 3: const item2 = new Item ('./images/item2.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},500,"BIGBALL");
                        promises.push (item2); break;
                    case 2:  const item = new Item ('./images/item1.png',{x:posx*ct.UNIT_MAP,y:posy*ct.UNIT_MAP},{width:ct.UNIT_MAP,height:ct.UNIT_MAP},200,"SMALLBALL");
                            promises.push (item);
                           
                 
                            
                   
                    
                    
                    
                    
                }

            } )
        })
       

            Promise.all(promises).then (data=>{
                
                data.forEach( (element,index)=>{

                    this.map[Math.trunc(index/map[0].length)][index%map[0].length] = data[index]
                })
                
                
                resolve (this.map)
            })
          

         

    })  


    }


    characterCanMove(character){ // watch if there is wall in next movement

        var posx = Math.trunc( (character.position.x)/ct.UNIT_MAP)  
        var posy = Math.trunc(character.position.y/ct.UNIT_MAP)

      
        if (character.speed.x!=0){

            if (character.speed.x>0)
            var posx = Math.trunc( (character.position.x+ct.UNIT_MAP-1)/ct.UNIT_MAP)  

            else
            var posx = Math.trunc( (character.position.x-1)/ct.UNIT_MAP)  


            if (posx+1<this.map.length && posx-1>=0) {
            if ( (character.position.x%ct.UNIT_MAP==0  && this.map[posx+1][posy] instanceof Wall )|| ((character.position.x-1)%ct.UNIT_MAP<=5 && this.map[posx-1][posy] instanceof Wall) )                          {
            character.position.x=(posx)*ct.UNIT_MAP;
            character.speed.x=0;
            }
        }}

     
        else if  (character.speed.y!=0){

            if (character.speed.y>0)
            var posy = Math.trunc( (character.position.y+ct.UNIT_MAP-1)/ct.UNIT_MAP)  

            else 
                var posy = Math.trunc( (character.position.y-1)/ct.UNIT_MAP)  
    
            if (posy+1<this.map[0].length && posy-1>=0){
            if (((character.position.y+ct.UNIT_MAP-1)%ct.UNIT_MAP>=48 && this.map[posx][posy+1] instanceof Wall)||((character.position.y-1)%ct.UNIT_MAP<=5 && this.map[posx][posy-1] instanceof Wall)){
            character.position.y=(posy)*ct.UNIT_MAP;
            character.speed.y=0;
            }
        }}

  
    
        if (posx-1>=0 && posx+1<this.map.length && posy-1>=0 && posy+1<this.map[0].length )

        if (this.map[posx][posy] instanceof Item && character instanceof Pacman){
        

            this.pacman.points+= this.map[posx][posy].points;
            if (this.map[posx][posy].type=="BIGBALL") this.pacman.setOnFire();
                
            
            this.map[posx][posy]={}



        }
   
        if (this.pacman.onFire){
            this.enemies.forEach(enemy => {
                enemy.deleteOnFire();

            })
        }
        else  this.enemies.forEach(enemy => {
            enemy.setOnFire();

        })
        
    }


    isCharacterLimit(character){

        if (character.position.x> this.sizeMap.width)

            character.position.x=-ct.UNIT_MAP;
        
        else if(character.position.x<-ct.UNIT_MAP)
        character.position.x=this.sizeMap.width;

        else if (character.position.y> this.sizeMap.height)
        character.position.y=-ct.UNIT_MAP;

        else if (character.position.y< -ct.UNIT_MAP)
        character.position.y=this.sizeMap.height;
    }


    handleMovement(character,direction){

           

        let posx, posy;
        if (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
         posx = Math.trunc(character.position.x/ct.UNIT_MAP)  
        else             if (character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
         posx = Math.trunc(character.position.x/ct.UNIT_MAP)  +1


        if (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED)
         posy = Math.trunc(character.position.y/ct.UNIT_MAP)  
        else             if (character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED)
         posy = Math.trunc(character.position.y/ct.UNIT_MAP)  +1   

      if (posx<ct.COLUMNS&&posx>0)

        switch(direction){
       

            case "UP":   
            
            if(((character.speed.x!=0 || (character.speed.x==0 &&character.speed.y==0)) && (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map[posx][posy-1] instanceof Wall) )||(  character.speed.y>0 )){
            
            if (character.speed.x!=0)
            character.position.x=posx*ct.UNIT_MAP;
            
            character.goUp(); 
            }

            break;
            case "DOWN": 

            if(((character.speed.x!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.x%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.x%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map[posx][posy+1] instanceof Wall) )||(character.speed.y<0)){
            
            if (character.speed.x!=0)

            character.position.x=posx*ct.UNIT_MAP;
            character.goDown(); 
            }
            break;
            case "LEFT":

             if(((character.speed.y!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map[posx-1][posy] instanceof Wall ))||(character.speed.x>0)){
                
             if (character.speed.y!=0)

             character.position.y=posy*ct.UNIT_MAP;
             character.goLeft(); 
             }
             break;

            case "RIGHT": 

            if(((character.speed.y!=0 ||(character.speed.x==0 &&character.speed.y==0)) && (character.position.y%ct.UNIT_MAP<=4*ct.PACMAN_SPEED || character.position.y%ct.UNIT_MAP>=ct.UNIT_MAP-4*ct.PACMAN_SPEED) && !(this.map[posx+1][posy] instanceof Wall) )||(character.speed.x<0)){

            if (character.speed.y!=0)

            character.position.y=posy*ct.UNIT_MAP;
            character.goRight(); 
            }
          
        }

    
}

isThereCollision(){

    this.enemies.forEach( enemy => {
     

    if (!((this.pacman.position.x > (enemy.position.x + ct.UNIT_MAP) || 
    (this.pacman.position.x + ct.UNIT_MAP) < enemy.position.x || 
    this.pacman.position.y > (enemy.position.y + ct.UNIT_MAP) ||
    (this.pacman.position.y + ct.UNIT_MAP) < enemy.position.y)))
    {  
         if (enemy.onFire) 
             this.pacman.die();
         else enemy.die();
    }

    })

    

}

listenKeydown(){

    let direction;
    document.onkeydown = (event)=> {

        switch (event.keyCode){
            case ct.KEY_UP: direction = "UP"; break;
            case ct.KEY_DOWN: direction = "DOWN"; break;
            case ct.KEY_LEFT: direction = "LEFT"; break;
            case ct.KEY_RIGHT: direction = "RIGHT"; break;
        }
        this.handleMovement(this.pacman,direction);
    }
   

}

moveEnemy(){

   let direction;   

   this.enemies.forEach( enemy => {
   
    switch (enemy.type){

        case 1: 
        case 2:
        case 3:
        
        direction = enemy.randomMovement();break;
     //   case 2: direction = this.map.enemy.randomMovement2();break;
        case 3:
    }

    this.handleMovement(enemy,direction)
})

    }

}