const nom = document.getElementById("name");
const content = document.getElementById("content");
const bouton = document.getElementById("bouton");
const tab = [];
const liste = document.getElementById("ul1");


bouton.addEventListener("click", () => {
    const todo = nom.value + ":" + content.value;
    if (todo.trim() !== '') {
        tab.push(todo);
        affichertab();
        delete todo;
    }

});

function affichertab() {
    liste.innerHTML = '';
    tab.forEach((task) => {
        const img = document.createElement("img");
        img.src = "delete.jpg";
        img.alt = "button";
        img.style.cursor = "pointer";
        img.style.width = "20px";
        const li = document.createElement('li');
        li.textContent = task;
        li.appendChild(img);
        liste.appendChild(li);
        img.addEventListener("click", () => {
            liste.removeChild(li);
            tab.remove(task);
        });


    });
};
