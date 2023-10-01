var counter = 6;

function updateCounter() {
    var phoneDivs = document.getElementsByClassName("phone");
    counter = phoneDivs.length;

    document.getElementById("phoneCount").innerHTML = counter + " items";
}

function createPhone(id, brand, model, imageSrc) {
    let phoneContainer = document.getElementById("phoneContainer");

    let phoneDiv = document.createElement("div");
    phoneDiv.className = `phone ${id}`;
    phoneDiv.innerHTML =
    `<img src="${imageSrc}" alt="Picture of ${model}" class="mobile"> 
    <p>${brand}</p> 
    <h3 id="phone${id}">${model}</h3>`;

    phoneContainer.appendChild(phoneDiv);
    updateCounter();

    phoneDiv.classList.add("grid-item");
}

function addNewPhone() {
    let brandInput = document.getElementById("brand");
    let modelInput = document.getElementById("model");
    let imageInput = document.getElementById("imageSrc");

    let brand = brandInput.value;
    let model = modelInput.value;
    let imageSrc = imageInput.value;
    
    counter++;

    let newId = counter;

    createPhone(newId, brand, model, imageSrc);

    brandInput.value = "";
    modelInput.value = "";
    imageInput.value = "";

    searchPhone();
}

function searchFunction(model, searchWord) {
    console.log('Model:', model);
    console.log('Search Word:', searchWord);
    let result = model.toUpperCase().includes(searchWord.toUpperCase());
    console.log('Result:', result);
    return result;
}

function searchPhone() {
    let input = document.getElementById("searchInp");
    let phones = document.getElementsByClassName("phone");
    
    input.addEventListener("keyup", function () {
        let searchWord = input.value.trim().toUpperCase();

        for (let i = 0; i < phones.length; i++) {
            let model = phones[i].getElementsByTagName("h3")[0].textContent || phones[i].getElementsByTagName("h3")[0].innerText;

            if (searchFunction(model, searchWord)) {
                phones[i].style.display = "";
            } else {
                phones[i].style.display = "none";
            }
        }
    });
}


searchPhone();