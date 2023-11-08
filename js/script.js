const result = document.querySelector('.result')
const spanInput = document.querySelector('.span-input');
const inputRange = document.querySelector('.input-range');
const generatorPassword = document.querySelector('#create-password');
const copyPassword = document.querySelector('#copy-password');
const copyCard = document.querySelector('.copy-card');

//--------------------getting DomElements------------------------------//

generatorPassword.addEventListener('click',()=>{
    const passwordcaracters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJQLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+{[}]|;".<>?/'
    let spanpassword = ''
    for(let i = 0 ; i < inputRange.value; i++){
        const letterRandom = passwordcaracters[Math.floor(Math.random() * passwordcaracters.length)]
        spanpassword += letterRandom
        result.textContent = spanpassword
    }
    //como letterRandom gera somente um numero,letra,simbolo do length,passei ele em um for para fazer isso x vezes de acordo
    //como valor do input,sugerido pelo usuario 
});

//-------------------CaracterRandomGenerator------------------------//

copyPassword.addEventListener('click',()=>{
    navigator.clipboard.writeText(result.textContent)
    copyCard.classList.add('flex')
    setInterval(() => {
        copyCard.classList.remove('flex')
    }, 1500);
    //contem uns bugs,quando clica rapido de mais,mas irei arrumar
})

//---------------------------CopyEvent----------------------------//

inputRange.addEventListener('input',()=>{
    spanInput.textContent = `Tamanho: ${inputRange.value}`
});

//-------------------------InputRangeEvent--------------------------//