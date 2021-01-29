const addPostBtn = document.querySelector(".addPostBtn");
const postSection = document.querySelector(".posts")

addPostBtn.addEventListener("click", function(){
    const newPost = document.createElement("section");
    const postContent = document.getElementById("post-textarea").value;
    const postContentstr = document.createTextNode(postContent);
    console.log(postContent);

    newPost.appendChild(postContentstr);

    postSection.appendChild(newPost);
})
