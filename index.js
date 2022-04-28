
    var submit = document.querySelector(".submit");

    var uploaded_img = []; 

    var upload = document.querySelector(".upload-btn");

   


    upload.addEventListener("click",function(){
        
        // creating a div for image
        var img_div = document.createElement("div");
        var userSection = document.getElementById("users_section");
        userSection.appendChild(img_div);
        img_div.classList.add("display_image");

        // creating an file Reader object and adding an eventListener to it..
        const reader = new FileReader();
        reader.addEventListener("load", () => {           

            uploaded_img.push(reader.result);

            console.log(uploaded_img);
            console.log(last)

            //displaying the image..
            document.querySelectorAll(".display_image")[last].style.backgroundImage = `url(${uploaded_img[last]})`;
        })

        reader.readAsDataURL(document.querySelector('.upload_image').files[0]);

        // fake upload change
        this.innerHTML = "Uploaded";
        this.classList.add("fake-upload");
    })


    submit.addEventListener("click",function(){
         // creating a div for storing data...
         var div = document.createElement("div");
         document.body.appendChild(div);
         div.classList.add("data-card");  

        // getting all the four values...
        var name = document.querySelector('#name').value;
        var qualification = document.querySelector('#qualification').value;
        var place = document.querySelector('#places').value;
        var experience = document.querySelector('#experience').value;

             
        
            //getting the last element 
         last = (document.querySelectorAll(".data-card").length) - 1;    
    
        document.querySelectorAll('.data-card')[last].innerHTML = `Name : ${name} <br> Qualification : ${qualification} <br> Place : ${place} <br> Experience : ${experience} `;
         
        //making the image visible...
        document.querySelector(".display_image").style.display = "inline-block";

        // changing the upload button...
    })

    
