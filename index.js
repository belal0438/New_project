
var form = document.getElementById("my-form");
var NameInput = document.getElementById("name");
var EmailInput = document.getElementById("email");
var submitbtn = document.querySelector(".btn");
var UlList = document.getElementById("users");




form.addEventListener("submit", onsubmit);

function onsubmit(e) {
    e.preventDefault();
    let DataObj = {
        Name: NameInput.value,
        Email: EmailInput.value
    }

    var li = document.createElement("li");
    li.innerText = NameInput.value + " " + EmailInput.value
    UlList.append(li);


    var Deletebtn = document.createElement("button");
    Deletebtn.textContent = "Delete";
    Deletebtn.className = "delete";
    li.append(Deletebtn);



    converIntostr = JSON.stringify(DataObj);
    localStorage.setItem(NameInput.value + EmailInput.value, converIntostr);
    //   forobj=localStorage.setItem("Data",converIntostr);
    //   //convert into obj format;
    //  console.log(localStorage.getItem(JSON.parse("forobj")));
}





    // //for delele
    // UlList.addEventListener("click", remove_data);
    //     // funtion for_delete
    //  function remove_data(e){
    //     // console.log(1)
    //     if(e.target.classList.contains("delete")){
    //             //  console.log(1) 
    //         var li = e.target.parentElement;
    //         UlList.removeChild(li);
    //         localStorage.removeItem(NameInput.value + EmailInput.value);

    //     }

    //  }




