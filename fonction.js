//instriction dune fonction simple 

//pour definir une fonction en JS :
/*on utilise 
1- function (){  fonction sans argument
    instruction

}) en javascript 
2- fuction ( x, y){
    instruction
}
3- function (x,y,z){
    instruction 
    return
}
*/

//Application
//creer une fonction carré
/*function carre (){
  let x =2  ;
    console.log(x*x );
}
 carre(2); */
 // fonction test (x, y)
 /*function test (x,y){
     console.log((x*x)+ x+y);
 }
 test (2,4);*/
 function table (x){
     for( let i=0;i<=10;i++){
         console.log(x+ "*"+ i +"=" +x*i);
     }
 }
 table (50);




