// ecrire un programme qui permet à utiliser de saisir pusiieurs valeurs 
// le nombre de saisi est determiné par l'utilisateur  et on affiche les valeurs
 
// pour traiter l'exercice on va utiliser les boucles do / while

/*var n=10;
do {
    console.log(n);
    
} while(n<=10) */

/*for(let n=0; n<=10; n++)
 {
     console.log(n);
} */
/*
var x= prompt("saisir une valeur");
if (x<=0){
    alert('valeur negative');
    x=prompt('entrer une valeur positive');
}
var j=1; 
var tab= new Array();
while(j<=x){
    tab[j]= prompt("saisir un nombre"+ j);j++;
}
document.write("les nombres saisis sont: ");
for (j=1; j<=x; j++){
    document.write(""+ tab[j]+ " ");
*/

/*for (var prenom=' ', prenom; true;){
    prenom= prompt('entrer votre prenom: ');
    if(prenom){
        prenom+=Nom + age+ ' ' ;
    }
    else{ 
        break;
    }
};
document.write(prenom);*/
// CCORRECTION EXERCICE 1:

/*do{
    var  nombrefois=prompt('veillez saisir une valeur positif');
}while(nombrefois<=0)
var tab=[];
for ( var i=1;i<=nombrefois;i++){
    // je recupere les valeurs valeurssaisir
    var valeursaisir= prompt("saisir une valeur");
    // je met les valeurs dans le tableau tab recuperer
    tab[i]=valeursaisir;
    // afficher les valeurs 
    document.write(" " + tab[i] + " ");
}*/

// exercice n°2: Ecrire u programme qui permet à l'utilisateur de  saisir son nom,
//  prénom et année de naissance.le programme affiche le nom ,

// 

/*var prenoms, nom, age;
var prenoms=prompt("veillez saisir votre prénom : ");
var nom =prompt('veillez saisir votre nom : ');

// do{
    var age=prompt('veillez entrer votre date de naissannce : ');

    


 
// var date= new Date();date.setFullYear(2021, 01, 03);
document.write(prenoms +"<br/>") ;
document.write(nom+"<br/>");
document.write((2021-age)+" ans");*/









var  prenom ; nom ; age 
var prenom = prompt ( " veillez saisir votre prenom");
var nom = prompt (" veillez saisir votre nom ");
var age = prompt (" veillezz saisir votre date de naissance ");
document.write( prenom + "< br/>" + nom + " <br/>" + age + "<br/>");