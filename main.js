/*
Console.log() har varit min vän.
Jag har haft väldigt mycket strul med nästan allt och det har nog varit det mest hjälpsamma verktyget. 
Detta kändes inte alls lika smidigt som när man satt med visual studio 2019 
och enkelt kunde se värden på variabler och sådant, eller så kan man det och jag har missat det:/.
*/

const addPostBtn = document.querySelector(".addPostBtn");
const postSection = document.querySelector(".posts");

//Gör så att om jag klickar på remove knappen så körs removeLastPost
document.getElementById("remove").addEventListener('click', removeLastPost);
document.getElementById("add").addEventListener('click', addPost);
document.getElementById("addPostBtn").addEventListener('click', addPost);

/*
Kollar om textboxen innehåller något, om den inte gör det så postar den endast en simpel kommentar.
Om det är innehåll så tas det och skapas som en ny post.
*/
function addPost(){
    if(document.getElementById("post-textarea").value == ""){
        //Skapar ett section element
        const text = document.createElement("section");
        //Skapar text
        const node = document.createTextNode("Enter a comment here");
        //lägger till texten i elementet som skapades tidigare
        text.appendChild(node);
        //lägger till text till posts diven
        const element = document.querySelector(".posts");
        element.appendChild(text);
        //kör editable funktionen så att den blir redigerbar.
        editable(text);
    } else{
        const newPost = document.createElement("section");
        const postContent = document.getElementById("post-textarea").value;
        const postContentstr = document.createTextNode(postContent);
        newPost.appendChild(postContentstr);
        postSection.appendChild(newPost);
        editable(newPost);

        //rensa text-area efter att man postat
        const textAreaClear = document.getElementById("post-textarea");
        textAreaClear.value = "";
    }
}

//tar bort den posten som ligger längst ner/postades senast.

function removeLastPost(){
    const test = document.querySelector(".posts");
    test.removeChild(test.lastChild);
}

//gör så att elementet som klickas på går att redigera.

function editable(elem) {
    elem.onclick = function () {
        this.contentEditable = true;
        this.focus();
    }
}