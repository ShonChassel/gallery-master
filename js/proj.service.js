'use strict'


var gProjects = [
    {
        id: makeId(),
        name: "Minesweeper",
        title: "Welcome to Minesweeper Online",
        desc: `Playing minesweeper is our passion. 
     That's why we strive to make it the greatest game in the world!Select
      a difficulty level to challenge yourself, and enjoy the game! 
      Rules Minesweeper rules are very simple. The board is divided 
      into cells, with mines randomly distributed. 
      To win, you need to open all the cells. The number on a cell 
      shows the number of mines adjacent to it. Using this information,
       you can determine cells that are safe, and cells that contain mines.
        Cells suspected of being mines can be marked with a flag using the
         right mouse button.`,
        url: "https://shonchassel.github.io/MineSweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: makeId(),
        name: "Touch The Nums",
        title: "Welcome to touch the nums Online",
        desc: `Touch Numbers Game is a math game for free.
         Train your brain, perception and reaction skills! The rules are simple:
          Try to remove all 25 numbers from the screen. Touch all the numbers from the smallest to
           the biggest number. You have only one minute for the game!`,
        url: "https://shonchassel.github.io/touch-the-nums/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: makeId(),
        name: "Collect the Balls",
        title: "Welcome to Collect the Balls Online",
        desc: `Multiply your balls as best you can in this awesome physics-based puzzle game!
         You begin each level with 3 balls. Move the cup and pay mind to the different multipliers
          that will increase your ball count. A little math and a steady hand will maximize your ball
           count and earn you three stars on each level!!`,
        url: "https://shonchassel.github.io/Collect-the-Balls/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: makeId(),
        name: "Pacman",
        title: "Welcome to Collect the Balls Online",
        desc: `Multiply your balls as best you can in this awesome physics-based puzzle game!
         You begin each level with 3 balls. Move the cup and pay mind to the different multipliers
          that will increase your ball count. A little math and a steady hand will maximize your ball
           count and earn you three stars on each level!!`,
        url: "https://shonchassel.github.io/pacman/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
    {
        id: makeId(),
        name: "Book Shop",
        title: "Welcome to Collect the Balls Online",
        desc: `Multiply your balls as best you can in this awesome physics-based puzzle game!
         You begin each level with 3 balls. Move the cup and pay mind to the different multipliers
          that will increase your ball count. A little math and a steady hand will maximize your ball
           count and earn you three stars on each level!!`,
        url: "https://shonchassel.github.io/Book-Shop/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"],
    },
]



function getProjects() {
    return gProjects
}

function getProjById(projId) {
    return gProjects.find(proj => {
        return proj.id === projId
    })
}