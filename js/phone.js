const allPhones = () =>{
    const phonesDiv = document.getElementById('search-box').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${phonesDiv}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data.data))
}

const displayData = (phones) => {
for (const phone of phones){
    console.log(phone)
    const parent = document.getElementById('phones');
    const div = document.createElement('div');
    div.innerHTML=`
        <div class="col">
            <div class=" text-center card border">
                <div class="pro-pic">
                    <img class="w=25" src="${phone.image}" alt="">
                </div>
                <h5>Phone Name: ${phone.phone_name}</h5>
                <p>Phone Brand:${phone.brand}</p>
                <div class="button">
                    <button class="btn btn-success" >Details</button>
                </div>
            </div>
        </div>
    `
    parent.appendChild(div);
}
    
}
