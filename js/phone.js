const allPhones = () =>{
    const searchPhone = document.getElementById('search-box');
    const searchText = searchPhone.value;
    searchPhone.value = '';
    
    if(searchText == ''){
        document.body.style.display=alert('please enter Input field');
    }

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}` 
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data.slice(0,20)))
}

const displayData = (phones) => {
    const searchResult = document.getElementById('phones');
    searchResult.textContent='';
    
    for (const phone of phones){
        const parent = document.getElementById('phones');
        const div = document.createElement('div');
        div.innerHTML=`
            <div class="col">
                <div class=" text-center card border">
                    <div class=" pro-pic">
                        <img  src="${phone.image}" alt="">
                    </div>
                    <h5>Phone Name: ${phone.phone_name}</h5>
                    <p>Phone Brand:${phone.brand}</p>
                    <div class="button">
                        <button onclick="phoneDetails('${phone.slug}')" class="btn btn-success" >Details</button>
                    </div>
                </div>
            </div>
        `
        parent.appendChild(div);
}
};

const phoneDetails = (id) => {
   const url = `https://openapi.programming-hero.com/api/phone/${id}`;
   fetch(url)
   .then(res => res.json())
   .then(data => setDetails(data.data))
};

const setDetails = (info) => {
    const phoneDetails = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.innerHTML=`
    <div>
        <div class="text-center">
            <img class='w-25' src="${info.image}" alt="">
        </div>
        <div class="card-body">
            <p>Display Size: ${info.mainFeatures.displaySize} </p>
            <p>Chip: ${info.mainFeatures.chipSet}</p>
            <p>Storages: ${info.mainFeatures.memory}</p>
            <p>Phone ID: ${info.slug}</p>
            <p>Release Date: ${info.releaseDate}</p>
        </div>
    </div>
    `
    phoneDetails.appendChild(div);

}
