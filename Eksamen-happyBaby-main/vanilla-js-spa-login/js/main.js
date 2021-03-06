
// ========== GLOBAL VARIABLES ==========

const _baseUrl = "https://api.jsonbin.io/v3/b/615587879548541c29bb374a";
const _headers = {
  "X-Master-Key": "$2b$10$Upc1jVUlFP59rVyNzr6jV.kI/yU4Ebjnyg1y5mY4NeMMA/i5vaHy6",
  "Content-Type": "application/json"
};

let _users =[];
let _selectedUser={};
let _babys=[];


// ========== READ ==========

/**
 * Fetchs person data from jsonbin
 */
async function loadUsers() {
  const url = _baseUrl + "/latest"; // make sure to get the latest version
  const response = await fetch(url, { headers: _headers });
  const data = await response.json();
  console.log(data);
  _users = data.record;
  appendUsers(_users);
  
}

loadUsers();

function appendUsers(users) {
  let html = "";

  for (const user of users) {
      html +=`
      <div class="card">
      <div class="container2">
      <img src="${user.img}" width="30%"></img>
        <h4><b>${user.titel}</b></h4>
        <p>${user.description}</p> 
      </div>
    </div>
    
      `;
  }

  document.querySelector('#users-container').innerHTML = html;
}


function sendBaby() {
  let form = document.getElementById("opretForm")

  let navn = form.querySelector("#navn").value
  let alder = form.querySelector("#alder").value
  let vægt = form.querySelector("#vægt").value
 

  let baby = {
    navn: form.querySelector("#navn").value,
    alder: form.querySelector("#alder").value,
    vægt: form.querySelector("#vægt").value
  }

  _babys.push(baby)
  appendBaby()

}

function appendBaby() {
  let container = document.getElementById("babyContainer")
  container.innerHTML = "" 
  for (const baby of _babys) {
    container.innerHTML += /*html*/ `
    <div>
    <img src="img/smiling-baby.jpg" alt="img" class="dinBaby"/>
      <div>${baby.navn}</div>
      <div>${baby.alder}</div>
      <div>${baby.vægt}</div>
    </div>
`   
  }
  let container2 = document.getElementById("babyContainer2")
  container2.innerHTML = "" 
  for (const baby of _babys) {
    container2.innerHTML += /*html*/ `
    <div>
    <img src="img/smiling-baby.jpg" alt="img" class="dinBaby"/>
      <div>${baby.navn}</div>
      <div>${baby.alder}</div>
      <div>${baby.vægt}</div>
    </div>
`   
  }
}




/*
function addPerson() {
    let imageInput = document.getElementById("img").value;
    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("vægt").value;
    let courseInput = document.getElementById("alder").value;
    let enrollmentTypeInput = document.getElementById("enrollmentType").value;

    if (imageInput && nameInput && emailInput && courseInput && enrollmentTypeInput) {
        let newPerson = {
            avatarUrl: imageInput,
            id: Date.now(),
            name: nameInput,
            email: emailInput,
            course: courseInput,
            enrollmentType: enrollmentTypeInput,
        }  

        _persons.push(newPerson);
        appendPersons(_persons);
        navigateTo("home");
    } else {
        alert("Indtast alle felter");
    }    
}
*/
