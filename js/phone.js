const allPhones = () =>{
    const searchPhone = document.getElementById('search-box');
    const searchText = searchPhone.value;
    searchPhone.value = '';
    if(searchText == ''){
        document.body.style.display=alert('Please Input Field');
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}` 
        fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data.slice(0,20)))
    }
    
}

const displayData = (phones) => {
    const searchResult = document.getElementById('phones');
    searchResult.textContent='';

    if(phones == 0){
        document.body.display=alert('No result found try again');
    }
    
    for (const phone of phones){
        const parent = document.getElementById('phones');
        const div = document.createElement('div');
        div.innerHTML=`
            <div class="col shadow-sm card-group ">
                <div class=" text-center card border p-2">
                    <div class="pro-pic">
                        <img src="${phone.image}" alt="">
                    </div>
                    <h5><b>Phone Name:</b> ${phone.phone_name}</h5>
                    <p><b>Phone Brand:</b> ${phone.brand}</p>
                    <div class="button ">
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
    console.log(info);
    
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent='';
    const div = document.createElement('div');    
    div.innerHTML=`
    <div class="d-lg-flex shadow-lg mb-5 p-2">
        <div class="my-auto">
            <img src="${info.image}" alt="">
        </div>
        <div class="card-body ">
            <p><b>Display Size:</b> ${info.mainFeatures.displaySize} </p>
            <p><b>Chip:</b> ${info.mainFeatures.chipSet}</p>
            <p><b>Storages:</b> ${info.mainFeatures.memory}</p>
            <p><b> Phone ID:</b> ${info.slug}</p>
            <p><b>${info.releaseDate ? info.releaseDate:'No release date'}</b></p>
            <p><b>WLAN:</b> ${info.others ? info.others.WLAN:'not available'}</p>
            <p><b>Bluetooth:</b> ${info.others ? info.others.Bluetooth:'not available'}</p>
            <p><b>GPS:</b> ${info.others ? info.others.GPS:'not available'}</p>
            <p><b>USB:</b> ${info.others ? info.others.USB:'not available'}</p>
            <p class="text-break"><b>Sensor:</b> ${info.mainFeatures.sensors ? info.mainFeatures.sensors:'not available'}</p>
        </div>
    </div>
    `
    phoneDetails.appendChild(div);
    window.scrollTo(200,0)

}


