let colorCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

const changeColor = () => {
    
    let display = document.getElementById("display")
    let color = document.getElementById("color")
    let randColor = "#"

    for(let i = 0; i < 6; i++) {
        let randNo = Math.floor(Math.random() * 16)
        randColor +=colorCodes[randNo]
    }

    color.innerHTML = randColor
    display.style.background = randColor

}