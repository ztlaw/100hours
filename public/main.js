console.log('We are connected')
const exerciseContainer = document.querySelectorAll('.container')
const deleteExercise = document.querySelectorAll('.bi-x-circle')

Array.from(deleteExercise).forEach( element => {
    element.addEventListener('click', exerciseDelete)
})

async function exerciseDelete(){
    const exerciseName = this.parentNode
    console.log(exerciseName)
    if (exerciseName){
       exerciseName.parentNode.style.visibility = 'hidden'
    }
}