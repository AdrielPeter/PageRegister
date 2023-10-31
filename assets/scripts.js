let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email')
let numberInput = document.getElementById('number')
let numberRepeatInput = document.getElementById('number-repeat')


nameInput.addEventListener('keypress',function(e){
    if(e.keyCode > 47 && e.keyCode < 58){
        e.preventDefault();
    }else if(nameInput.value == 0 || nameInput.value.length < 3){
        nameInput.classList.add('invalid')
    }else{
        nameInput.classList.remove('invalid')
    }
})

emailInput.addEventListener('keypress',function(e){
    if(emailInput.value == 0 || emailInput.value.length < 8){
        emailInput.classList.add('invalid')
    }else{
        emailInput.classList.remove('invalid')
    }
})

numberInput.addEventListener('keypress',function(e){
    if(e.keyCode > 47 && e.keyCode > 58){
        e.preventDefault();
    }else if (numberInput.value == 0 || numberInput.value.length != 10){
        numberInput.classList.add('invalid')
    }else{
        numberInput.classList.remove('invalid')
    }
})

numberRepeatInput.addEventListener('keypress',function(e){
    if(e.keyCode > 47 && e.keyCode > 58){
        e.preventDefault();
    }
})

numberRepeatInput.addEventListener('keyup',function(e){
    if (numberRepeatInput.value != numberInput.value){
        numberRepeatInput.classList.add('invalid')
    }else{
        numberRepeatInput.classList.remove('invalid')
    }
})



function send(){

    if(nameInput.value !=0 && emailInput.value !=0 && numberInput.value != 0 && numberRepeatInput.value !=0){

        let infos = JSON.parse(localStorage.getItem('infos') || '[]')

        infos.push({
            name: nameInput.value,
            email: emailInput.value,
            number: numberInput.value
        })

        localStorage.setItem('infos', JSON.stringify(infos))

    }else{
        alert('Fill in the fields correctly')
    }

}