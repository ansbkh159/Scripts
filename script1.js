alert("Bienvenue!");
alert("Veuillez choisir la difficulté du jeu!");
const x=prompt("Donner le nombre de tentatives");
let i=0;
for (;i<x;i++)
{
    const y=prompt("Donner un nombre entre 0 et 10");
    const z=Math.floor(Math.random() * 11);
    if (y==z)
    {
        alert("Vous avez gagné!");
        break;
    }
    else {
        alert("C'est faux");
    }

}
if (i==x) alert("Désolé vous avez perdu!");
