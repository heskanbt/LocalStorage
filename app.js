// inputlar

const inputkey = document.getElementById('addkey');
const inputvalue = document.getElementById('addvalue');
const inputdelete = document.getElementById('deletekey');

// butonlar

const addbtn = document.querySelector('#add');
const deletebtn = document.querySelector('#delete');
const clearbtn = document.querySelector('#clear');

// girilen değerleri alma

addbtn.addEventListener('click',addItem);
deletebtn.addEventListener('click',deleteItem);
clearbtn.addEventListener('click',clearItems);

//Functions

function addItem(){
    if(localStorage.getItem(inputkey.value) !== null){
       const x = confirm("Bu öge zaten var! Eklemek istediğinize emin misiniz?");
            if(x == true){
                localStorage.setItem(inputkey.value , inputvalue.value);
                console.log("Güncüllendi!");
            }else{
                alert("Eklenmedi!");
            }
    }
    else{
        localStorage.setItem(inputkey.value , inputvalue.value);
    }
    inputkey.value = "";    
    inputvalue.value = "";    
}

function deleteItem(){
    if(localStorage.getItem(inputdelete.value) === null){
        alert("Değer bulunamadı!")
    }
    else{
        localStorage.removeItem(inputdelete.value);
        console.log("Silindi!");
    }
}

function clearItems(){
    localStorage.clear();
}
