let image=null;

document.getElementById("fileInput").onchange=()=>{
    image=document.getElementById("fileInput").files[0];
    document.getElementById("ProfileImg").src=URL.createObjectURL(image);
}

document.getElementById("submit").onclick=function(){
    const userName=document.getElementById("userName").value;
    const email=document.getElementById("email").value;
    const phoneNumber=document.getElementById("phoneNumber").value;
    const address=document.getElementById("address").value;
    const province=document.getElementById("province").value;
    const guardian=document.getElementById("guardian").value;
    const education=document.getElementById("education").value;

    if(userName.trim().length<3){
        alert("Invalid User Name");
        return;
    }
    else if(!(email.trim().length>15 || email.trim().endsWith("@gmail.com"))){
        alert("Invalid Email Address");
        return;
    }
    else if(phoneNumber.trim().length!=10){
        alert("Invalid PhoneNumber");
        return;
    }
    else if(address.trim().length<3){
        alert("Invalid address");
        return;
    }
    else if(province.trim().length<3){
        alert("Invalid province");
        return;
    }
    else if(guardian.trim().length<3){
        alert("Invalid guardian");
        return;
    }
    else if(education.trim().length<3){
        alert("Invalid education");
        return;
    }
    
    
    const body=new FormData();
    body.append("name",userName);
    body.append("email",email);
    body.append("phoneNumber",phoneNumber);
    body.append("address",address);
    body.append("province",province);
    body.append("guardian",guardian);
    body.append("education",education);
    body.append("image",image);

    const req={
        method: "POST",
        body: body
    };

    fetch(`http://localhost:8080/add-image`,req)
    .then(res=>res.text())
    .then(data=>console.log(data))
    .catch(er=>console.log("Error : "+er));

}

document.getElementById("btnStudentView").onclick=()=>{
    window.open("studentView.html");
}