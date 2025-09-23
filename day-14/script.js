let btn = document.querySelectorAll('button');
let result = document.getElementById('result')

btn.forEach((button) =>{
    button.addEventListener('click' , (event) => {
        let val = event.target.innerText;

        if(val == '='){
            result.value = eval(result.value)
        }
        else if(val == 'AC' || val == 'X'){
            result.value = "";
        }
        else{
            result.value += val ;
        }
    })
})