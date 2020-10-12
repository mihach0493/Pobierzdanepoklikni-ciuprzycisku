console.log(`AJAX - WARSZTAT- Pobierz dane po Kliknieciu przycisku`)


let btnGetData = document.getElementById('get-data');
// console.log(btnGetData);


const getData = () => {

    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
        //     console.log(data);
      

    let pId = document.createElement('p');
    let pUserId = document.createElement('p');
    let pTitle = document.createElement('p');
    let pBody = document.createElement('p');
    let hr = document.createElement('hr');

    pId.innerText = `Post ID: ${data.id}`;
    pUserId.innerText = `User ID: ${data.userUD}`;
    pTitle.innerText = `Title: ${data.title}`;
    pBody.innerText = `Body: ${data.Body}`;

    document.body.appendChild(pId);
    document.body.appendChild(pUserId);
    document.body.appendChild(pTitle);
    document.body.appendChild(pTitle);
    document.body.appendChild(hr);
    // console.log(pTitle);
})
        .catch(error => {
            console.error(error);
        })
}

btnGetData.addEventListener('click', getData);