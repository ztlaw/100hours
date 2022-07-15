console.log('We are connected')
const exerciseContainer = document.querySelectorAll('.container')
const deleteExercise = document.querySelectorAll('.bi-x-circle')

Array.from(deleteExercise).forEach( element => {
    element.addEventListener('click', exerciseDelete)
})

async function exerciseDelete(){
    const exerciseName = this.parentNode.childNodes[1].innerText
    console.log(exerciseName)
    if (exerciseName){
       
       
       
        try{
            const response = await fetch('deleteExercise', {
                method: 'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                  'exerciseS': exerciseName
                })
              })
            const data = await response.json()
            console.log(data)
            location.reload()
    
        }catch(err){
            console.log(err)
        }
    }


       exerciseName.parentNode.style.visibility = 'hidden'
    }

