 
function saveData(){  

    var name = document.querySelector('#name').value;
    var qualification = document.querySelector('#qualification').value;
    var place = document.querySelector('#places').value;
    var experience = document.querySelector('#experience').value;

    // uploaded images....
    var path = getPath();


    // creating a div element.. and adding data-card class

    var div = document.createElement("div");
    document.body.appendChild(div);
    div.classList.add("data-card");  
    
     getPath();
    

    //getting the last element 
    var last = (document.querySelectorAll(".data-card").length) - 1;    
   
    document.querySelectorAll('.data-card')[last].innerHTML = name + "<br>" + qualification + "<br>" + place + "<br>" + experience;
      
    
   
}

function showImage(){
    var img = document.createElement("img");
    var br = document.querySelectorAll(".data-card br");

    document.querySelector(".data-card").insertBefore(img, br);  

    img.classList.add('upload-img');

}

function getPath(){
    var path = document.querySelector('#image').value;
    return path;
}

function fake_upload(){
    document.querySelector(".upload-btn").innerHTML = "Uploaded";
    document.querySelector(".upload-btn").classList.add('fake-upload');   
}