let siteName =document.getElementById("siteName");
let websiteUrl =document.getElementById("websiteUrl");
let submit =document.getElementById("submit");

let mood = 'Create';
let tmp;

//creat prodect
let dataPro;
if(localStorage.product !=null){
    dataPro = JSON.parse(localStorage.product)
}else{
    dataPro =[];
}


submit.onclick = function(){
    let newPro = {
        siteName:siteName.value.toLowerCase(),
        websiteUrl:websiteUrl.value.toLowerCase(),
    }
   if(siteName.value !=''
   && websiteUrl.value !=''){
       if(mood === 'create'){
        dataPro.push(newPro);

   }else{
    dataPro[ tmp ]= newPro;
    mood = 'create';
    submit.innerHTML = 'Create';
   }
   }


    // save localstorage
    localStorage.setItem('product', JSON.stringify(dataPro));

    showData()
    clearData()

}

// clear inputs
function clearData(){
    siteName.value = "";
    websiteUrl.value = "";
}
// read

function showData()
{
    let table = '';
    for(let i = 0; i < dataPro.length;i++){
        table += `        
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].siteName}</td>
        <td>${dataPro[i].websiteUrl}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `;
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length > 0){
        btnDelete.innerHTML = `
        <button onclick="deleteAll()">delete All (${dataPro.length})</button>
        `
    }else{
        btnDelete.innerHTML ='';
    }
}
showData()
// delete
function deleteData(i)
{
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
    showData()
}
function deleteAll()
{
    localStorage.clear()
    dataPro.splice(0)
    showData()
}

 
// update
function updateData(i){
    siteName.value = dataPro[i].siteName;
    websiteUrl.value = dataPro[i].websiteUrl;
    submit.innerHTML ='Update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })

}
// search 
// cleand data
