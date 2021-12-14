// getting the tags by querying
const dragables = document.querySelectorAll('.dragable')
const empties = document.querySelectorAll('.empty')
const container = document.querySelector('#container')
const modal = document.querySelector("#myModal");
const back = document.querySelector("#back");
const front = document.querySelector("#front");
const span = document.querySelectorAll(".close")[0];

// looping over dragable items and add classes
dragables.forEach(dragable => {
    dragable.addEventListener('dragstart', () => {
        dragable.classList.add('dragging');
    })
    dragable.addEventListener('dragenter', (e) => {
        e.preventDefault()
        console.log('enter');

        // dragable.classList.remove('dragging');

    })
    // right click function
    dragable.addEventListener('contextmenu', e => {
        e.preventDefault();
        dragable.classList.add('check');

        modal.style.display = "block";

        console.log(e.target);
    });

    dragable.addEventListener('dragover', (e) => {
        e.preventDefault()
        // console.log('drop');

    })


    dragable.addEventListener('dragend', () => {
        console.log('ended');
        dragable.classList.remove('dragging');

    })

})

// looping over the shapes 
empties.forEach(empty => {
    empty.addEventListener('drop', e => {
        e.preventDefault()
        const drag = document.querySelector('.dragging')
        empty.appendChild(drag)

    })
})
// modal close onclick anywhere
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// 
span.onclick = function () {
    modal.style.display = "none";
}
// bring the item to back  

back.addEventListener('click', () => {
    let drag = document.querySelector('.check')
    drag.style.zIndex = "1"
    drag.style.position = "absolute"
    modal.style.display = "none";
    drag.classList.remove('check')
    console.log(drag);

})
// bring the item to front  
front.addEventListener('click', () => {
    let drag = document.querySelector('.check')
    drag.style.zIndex = "3"
    drag.style.position = "absolute"

    modal.style.display = "none";
    drag.classList.remove('check')
    console.log(drag);

})