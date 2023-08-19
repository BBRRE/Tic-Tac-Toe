

function drawGrid(){
    const parent = document.querySelector('.grid-container')
    
    for(i = 0; i < 9; i++){
    const div = document.createElement('div')
    div.classList.add(`grid`)
    div.classList.add(i)
    parent.appendChild(div)
}}

function play(){
    const people = []
    const player1 =[document.querySelector('#player1').value, 'X']
    const player2 = [document.querySelector('#player2').value, '0']

    people.push(player1, player2)
    return{
        player1,
        player2,
        people
    }
}

function map(){
    const gameField = document.querySelectorAll('.grid')
    gameField.forEach(element => {
        element.addEventListener('click', function(e){
            target = e.target
            game()
            win()
            draw()
            return target
        }, {once : true})
    });
}

 function startGame() {
    drawGrid()
    map()
    const container = document.querySelector('.grid-container')
    container.classList.add('appear')
    const form = document.querySelector('.form')
    form.style.display = 'none'
    play()
 }

document.querySelector('#confirm').addEventListener('click', startGame, {once : true})

let cont = 2
let gg = 0
let player11 = []
let player22 = []
function game(){
    if (cont % 2 === 0){
        target.innerHTML = 'X'
        player11.push(target.classList[1])
    }
    else{
        target.innerHTML = '0'
        player22.push(target.classList[1])
    }
    cont = cont + 1
    gg = gg + 1
    console.log(gg)
    return{
        player11,
        player22
    }
}


function win(){
winArr = [['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','4','8'],['6','4','2']]
 for(i = 0;i < 7;i++){
    if(winArr[i].every(i => player11.includes(i))){
        const one = document.getElementsByClassName(winArr[i][0])
        const two = document.getElementsByClassName(winArr[i][1])
        const three = document.getElementsByClassName(winArr[i][2])
        console.log(three)
        one[0].style.backgroundColor = 'green'
        two[0].style.backgroundColor = 'green'
        three[0].style.backgroundColor = 'green'
        alert().winner()
        alert().newww()
        return
    }
    else if(winArr[i].every(i => player22.includes(i))){
        const one = document.getElementsByClassName(winArr[i][0])
        const two = document.getElementsByClassName(winArr[i][1])
        const three = document.getElementsByClassName(winArr[i][2])
        console.log(three)
        one[0].style.backgroundColor = 'red'
        two[0].style.backgroundColor = 'red'
        three[0].style.backgroundColor = 'red'
        alert().looser()
        alert().newww()
        return
    }
    }
    
    
    if((gg === 9)){
        const grid = document.querySelectorAll('.grid')
        grid.forEach(element => {
            element.style.backgroundColor = 'grey'
        })
        alert().drawer()
        alert().newww()
    }

}

// function draw(){
//     if((gg === 9) && win){
//         const grid = document.querySelectorAll('.grid')
//         grid.forEach(element => {
//             element.style.backgroundColor = 'grey'
//         })
//         alert().drawer()
//         alert().newww()
//     }
    
// }




function gameRestart(){
    for(i=0;i<9;i++){
    const gameFled = document.querySelector('.grid')
    gameFled.remove()
}

    gg = 0
    drawGrid()
    player11 = []
    player22 = []
    map()
}

function alert(){
    const parent = document.querySelector('.comment')
    const win = document.createElement('div')
    win.classList.add('win')
    win.innerHTML = `${player1.value} Wins <button class="retry">Retry?</button>`
    const loss = document.createElement('div')
    loss.classList.add('loss')
    loss.innerHTML = `${player2.value} Wins <button class="retry">Retry?</button>`
    const eee = document.createElement('div')
    eee.classList.add('draw')
    eee.innerHTML = `DRAW <button class="retry">Retry?</button>`
    
    function newww(){
    const retry = document.querySelectorAll('.retry')
    retry.forEach(element => {
        element.addEventListener('click', function(e){
            gameRestart()
            clear()
        })
    })}

    
    function winner(){
        parent.appendChild(win)
    }

    function looser(){
        parent.appendChild(loss)
    }

    function drawer(){
        parent.appendChild(eee)
    }

    function clear(){
        console.log(parent)
        parent.innerHTML = ''
    }

    
    return{
        winner,
        looser,
        drawer,
        clear,
        newww
}
}