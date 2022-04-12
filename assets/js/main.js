//crea array di oggetti che rappresenta ciascun post
let posts = [
    {
        id: 1, 
        user_name: "Bronto Paolo",
        user_photo: "./assets/img/Sample_User_icon.png",
        date: "07-05-2022",
        text_post: "Whatever is good for your soul, do that",
        post_photo: "https://picsum.photos/450/300",
        likes: 39
    },

    {
        id: 2, 
        user_name: "Cannon Brando",
        user_photo: "./assets/img/Sample_User_icon.png",
        date: "07-03-2022",
        text_post: "Whatever is good for your soul, don't do that",
        post_photo: "https://picsum.photos/450/300",
        likes: 39
    }
]

//stampa contenuto degli oggetti nel dom come post
posts.forEach((element, index) => {
    const id = element.id;
    console.log(id);

    let postElement = `
    
    <div class="post mt">

        <div class="margin">
        
            <div class="user">
                <img class="user_img"
                    src="${element.user_photo}">

                    <div>
                        <h3>${element.user_name}</h3>
                        <span>${element.date}</span>
                    </div>
    
            </div>

            <div class="content">
                <p>${element.text_post}</p>

                <div class="post_photo">

                    <img src="${element.post_photo}">

                </div>
            <div>

        </div>
    </div>
    `

    document.querySelector(".container").insertAdjacentHTML(`beforeend`, postElement);

});


