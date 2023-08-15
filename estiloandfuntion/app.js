

let player1 = 500;
let player2 = 500;

let ganador = document.querySelector('.ganador h1');
let body = document.querySelector('.body')

//
canActiveEspecialUser = true;
canActiveEspecialEnemy = true;

//Usuario
let User = document.querySelector('.user');
let lifeUser = User.querySelector('.life');
let especialUser = User.querySelector('.ataqueEP');
let standarUser = User.querySelector('.picachu');
let AnimacionAtaqueUser = User.querySelector('.ataquepicachu');
let AnimacionEspecialUser = User.querySelector('.ataqueespecialpicachu');

function attackUser(damage) {
    player2 = player2 - damage;
    lifeEnemy.style.left = `${(100-(player2/5))}%`
    if((player2/5) < 60){
        lifeEnemy.style.background = `yellow`
     }
    if((player2/5) < 30){
       lifeEnemy.style.background = `red`
    }
    if((player2/5) < 40 && canActiveEspecialEnemy === true){
        especialEnemy.removeAttribute('disabled')
    }
    if(player2 <= 0){
        ganar('Picachu')
    }
}

attacksUser = User.querySelectorAll('.attacks input')
attacksUser.forEach(attack => {
    let damage = 0
    attack.addEventListener('click',() => {
       if(attack.className === 'ataque'){
           damage = Math.floor((Math.random()*(80-20)) + 20)
           standarUser.classList.add('none')
           AnimacionAtaqueUser.classList.add('activePicachu')

           setTimeout(() => {
            standarUser.classList.remove('none')
            AnimacionAtaqueUser.classList.remove('activePicachu')
           }, 1000);
       }
       else{
        AnimacionEspecialUser.classList.add('active__especial')
        damage = Math.floor((Math.random()*(200-100)) + 100)
        especialUser.setAttribute('disabled',true)
        canActiveEspecialUser = false
        body.classList.add('body1')
        setTimeout(() => {
            AnimacionEspecialUser.classList.remove('active__especial')
            body.classList.remove('body1')
           }, 4800);
       }
       console.log(damage)
       attackUser(damage);
   })
});

//Enemigo
let Enemy = document.querySelector('.enemy');
let lifeEnemy= Enemy.querySelector('.life');
let especialEnemy = Enemy.querySelector('.ataqueEP');
let standarEnemy = Enemy.querySelector('.charizard');
let AnimacionAtaqueEnemy = Enemy.querySelector('.ataqueCharizard');
let AnimacionEspecialEnemy = Enemy.querySelector('.ataqueEC');

function attackEnemy(damage) {
    player1 = player1 - damage;
     lifeUser.style.left = `${(100-(player1/5))}%`
     if((player1/5) < 60){
        lifeUser.style.background = `yellow`
     }
     if((player1/5) < 30){
        lifeUser.style.background = `red`
     }
     if((player1/5) < 40 && canActiveEspecialUser === true){
        especialUser.removeAttribute('disabled');
    }
    if(player1 <= 0){
        ganar('Charizard')
    }
}

attacksEnemy = Enemy.querySelectorAll('.attacks input')
attacksEnemy.forEach(attack => {
    let damage = 0
    attack.addEventListener('click',() => {
       if(attack.className === 'ataque'){
           damage = Math.floor((Math.random()*(80-20)) + 20)
           standarEnemy.classList.add('none')
           AnimacionAtaqueEnemy.classList.add('activeCharizard')

           setTimeout(() => {
            standarEnemy.classList.remove('none')
            AnimacionAtaqueEnemy.classList.remove('activeCharizard')
           }, 1000);
       }
       else{
        AnimacionEspecialEnemy.classList.add('active__especial')
        damage = Math.floor((Math.random()*(200-100)) + 100)
        canActiveEspecialEnemy = false
        especialEnemy.setAttribute('disabled',true)
        body.classList.add('body1')
        setTimeout(() => {
            AnimacionEspecialEnemy.classList.remove('active__especial')
            body.classList.remove('body1')
        }, 3000);
    }
       console.log(damage)
       attackEnemy(damage);
   })
});

function ganar(name) {
    ganador.innerHTML = `Ganador ${name}`
}
