let body = '';
let ar = [];
document.getElementById("showBox").classList.add("hide");

fetch("http://localhost:8080/get-student")
    .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
    })
    .then(data => {
        console.log("Fetched Data:", data);
        let count = -1;
        data.forEach(e => {
            count++;
            body += `<tr>
                <td>${e.name}</td>
                <td>${e.email}</td>
                <td>${e.phoneNumber}</td>
                <td>${e.province}</td>
                <td>${e.address}</td>
                <td>${e.guardian}</td>
                <td>${e.education}</td>
                <td>
                    <input class="hideCheckbox" id="viewS${count}" type="checkbox">
                    <label for="viewS${count}" class="fa-solid fa-eye"></label>
                </td>
            </tr>`;

        
            const imageUrl = `data:image/png;base64,${e.image}`; 

            ar.push({
                id: e.studentID,
                name: e.name,
                email: e.email,
                phoneNumber: e.phoneNumber,
                province: e.province,
                address: e.address,
                guardian: e.guardian,
                education: e.education,
                image: imageUrl
            });
        });

        document.getElementById("tableBody").innerHTML = body;

        document.getElementById("tableBody").addEventListener('change', function (event) {
            if (event.target && event.target.classList.contains('hideCheckbox')) {
                const index = Array.from(document.querySelectorAll('.hideCheckbox')).indexOf(event.target);
                if (event.target.checked) {
                    console.log(ar[index]);
                    document.getElementById("showBox").classList.remove("hide");
                    document.getElementById("id").textContent = ar[index].id;
                    document.getElementById("name").textContent = ar[index].name;
                    document.getElementById("email").textContent = ar[index].email;
                    document.getElementById("phoneNumber").textContent = ar[index].phoneNumber;
                    document.getElementById("province").textContent = ar[index].province;
                    document.getElementById("address").textContent = ar[index].address;
                    document.getElementById("guardian").textContent = ar[index].guardian;
                    document.getElementById("education").textContent = ar[index].education;
                    document.getElementById("ProfileImg").src = ar[index].image; 
                }
            }
        });
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

document.getElementById("close").onclick = () => {
    document.getElementById("showBox").classList.add("hide");
};
