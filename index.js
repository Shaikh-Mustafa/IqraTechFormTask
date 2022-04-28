
    var submit = document.querySelector(".submit");

    var uploaded_img; 

    var upload = document.querySelector(".upload-btn");

    function setImage(event){
        console.log(event.target.files[0]);
        uploaded_img = event.target.files[0];
    }
    submit.addEventListener("click",()=>{
        // getting all the users data first....
        var name = document.querySelector('#name').value;
        var qualification = document.querySelector('#qualification').value;
        var place = document.querySelector('#places').value;
        var experience = document.querySelector('#experience').value;
        var image_url = URL.createObjectURL(uploaded_img);
        console.log(image_url)
         
        // this is where the card is to be created..
        const userSection = document.querySelector("#users_section");
        // creating a card..s_section
        var card = document.createElement("div");

        card.innerHTML = `
        <div class="img-container">
        <img class='user-img' src = ${image_url} />
        </div>
        <div>

        <div>
        <h3>Name : <span>${name}</span></h3> 
        <h3>Qualification : <span>${qualification}</span></h3>
        <h3>place: <span>${place}</span></h3>
        <h3>experience: <span>${experience} years</span></h3>

        </div>`

        userSection.appendChild(card);

        card.classList.add("data-card")
    })
