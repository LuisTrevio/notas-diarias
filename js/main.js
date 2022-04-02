
//Create a Dark Mode
function darkmode() {
    document.body.classList.toggle("dark-mode");
    document.querySelectorAll('.dtext').forEach((result) => {result.classList.toggle('dark-on');})
    document.querySelectorAll('.dbox').forEach((result) => {result.classList.toggle('namedark-on');})
}

function Tab() {
    document.querySelectorAll('.fix').forEach((result) => {result.classList.toggle('button-fix');})

    document.querySelectorAll('.logooff').forEach((result) => {result.classList.toggle('logo-off');})

    document.querySelectorAll('.bar4').forEach((result) => {result.classList.toggle('bar1-on');})

    document.querySelectorAll('.bar5').forEach((result) => {result.classList.toggle('bar2-on');})

    document.querySelectorAll('.bar6').forEach((result) => {result.classList.toggle('bar3-on');})

    document.querySelectorAll('.off').forEach((result) => {result.classList.toggle('menu-toogle');})

    document.querySelectorAll('.bgoff').forEach((result) => {result.classList.toggle('bg-on');})

    document.querySelectorAll('.btn').forEach((result) => {result.classList.toggle('button-on');})

    document.querySelectorAll('.truco').forEach((result) => {result.classList.toggle('slide');})

    document.querySelectorAll('.scroll').forEach((result) => {result.classList.toggle('scroll-disable');})
}
