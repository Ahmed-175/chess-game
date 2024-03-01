const boxs = document.querySelectorAll('.q');
const pawns = document.querySelectorAll('.img');
let draggedItem = null ;

function dragStart(e){
  draggedItem  = this;
  this.style.opacity = '0.5';
}
function dragEnd(e){
  draggedItem  = null;
  this.style.opacity = '1';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(){
  this.classList.add('hovered')
}

function dragLeave(e) {
  e.preventDefault();
  this.classList.remove('hovered');
}

function drop(e){
  this.classList.remove('hovered');
  this.append(draggedItem);
}

pawns.forEach(pawn => {
  pawn.addEventListener('dragstart' , dragStart);
  pawn.addEventListener('dragend' , dragEnd);
})

boxs.forEach(box => {
  box.addEventListener('dragover' , dragOver);
  box.addEventListener('dragenter' , dragEnter);
  box.addEventListener('dragleave' , dragLeave);
  box.addEventListener('drop' ,drop);
})
