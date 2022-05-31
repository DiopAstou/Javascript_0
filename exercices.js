
function colorverte(){
    var x= document.getElementById('cube');
    x.style.backgroundColor='rgb(10, 255, 71)';

};
function colorinitial(){
    var y=document.getElementById('cube');
    y.style.backgroundColor='rgb(255, 10, 133)';
};
function hauteur(){
    var i=document.getElementById('cube');
    var height=i.clientHeight;
    if (height<300){
        i.style.height=(height+20)+'px'
    }else{
        i.style.height=100+'px'
    };
};
function disparaitre(){
    var j=document.getElementById('cube');
    j.style.display='none'; // notez bien qu'on peut aussi utiliser à la place du "display" ,le style.visibilty en l'affecttant : "hidden"
};
function reapparaitre(){
    var k=document.getElementById('cube');
    k.style.display ='block'; // notez bien qu'on peut aussi utiliser à la place du "display" ,le style.visibilty en l'affecttant : "visible"
};
function largeur(){
    var i=document.getElementById('cube')
    var width=i.clientWidth;
 if (width<300){
            i.style.width=(width+20)+'px'
    }else{
            i.style.width=100+'px'
    };
};
