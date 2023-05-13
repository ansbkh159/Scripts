const liste = document.querySelector('ol')

liste.addEventListener('click', (e) => {
    const couleur = '#' + Math.floor(Math.random() * 16777215).toString(16);
    e.target.style.backgroundColor = couleur;
});