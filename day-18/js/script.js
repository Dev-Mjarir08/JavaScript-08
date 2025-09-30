let title = document.getElementById('title')
let price= document.getElementById('price')

let display = document.querySelector('productTbl')

let products = []
let editId = null

let addProduct = () =>{
    
    let product = {
        title : title.value,
        price : price.value ,
    }
    products.push(product)
    title.value = ''
    price.value = ''
}

let displaProduct = () => {
    display.innerHTML = ''
    products.innerHTML = `
    
    `
}