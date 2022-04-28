
    var submit = document.querySelector(".submit");

    var uploaded_img = []; 

    var upload = document.querySelector(".upload-btn");

   

    submit.addEventListener("click",()=>{
        // getting all the users data first....
        var name = document.querySelector('#name').value;
        var qualification = document.querySelector('#qualification').value;
        var place = document.querySelector('#places').value;
        var experience = document.querySelector('#experience').value;
        var image = document.querySelector(".upload_image").value;

       

        // this is where the card is to be created..
        const userSection = document.querySelector("#users_section");
        // creating a card..s_section
        var card = document.createElement("div");

        card.innerHTML = `<h3>Name : <span>${name}</span></h3> 
        <h3>Qualification : <span>${qualification}</span></h3>
        <h3>place: <span>${place}</span></h3>
        <h3>experience: <span>${experience}</span></h3>`

        userSection.appendChild(card);

        card.classList.add("data-card")
    })

    // upload.addEventListener("click",function(){
        
    //     // creating a div for image
    //     var img_div = document.createElement("div");
    //     var userSection = document.getElementById("users_section");
    //     userSection.appendChild(img_div);
    //     img_div.classList.add("display_image");

    //     // creating an file Reader object and adding an eventListener to it..
    //     const reader = new FileReader();
    //     reader.addEventListener("load", () => {           

    //         uploaded_img.push(reader.result);

    //         console.log(uploaded_img);
    //         console.log(last)

    //         //displaying the image..
    //         document.querySelectorAll(".display_image")[last].style.backgroundImage = `url(${uploaded_img[last]})`;
    //     })

    //     reader.readAsDataURL(document.querySelector('.upload_image').files[0]);

    //     // fake upload change
    //     this.innerHTML = "Uploaded";
    //     this.classList.add("fake-upload");
    // })


    // submit.addEventListener("click",function(){
    //      // creating a div for storing data...
    //      var div = document.createElement("div");
    //      document.body.appendChild(div);
    //      div.classList.add("data-card");  

    //     // getting all the four values...
    //     var name = document.querySelector('#name').value;
    //     var qualification = document.querySelector('#qualification').value;
    //     var place = document.querySelector('#places').value;
    //     var experience = document.querySelector('#experience').value;

             
        
    //         //getting the last element 
    //      last = (document.querySelectorAll(".data-card").length) - 1;    
    
    //     document.querySelectorAll('.data-card')[last].innerHTML = `Name : ${name} <br> Qualification : ${qualification} <br> Place : ${place} <br> Experience : ${experience} `;
         
    //     //making the image visible...
    //     document.querySelector(".display_image").style.display = "inline-block";

    //     // changing the upload button...
    // })

    
