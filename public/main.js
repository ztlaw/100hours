console.log('We are connected')
const exerciseContainer = document.querySelectorAll('.container') // selecting all .container class elements
const deleteExercise = document.querySelectorAll('.bi-x-circle') // selecting all X image elements

Array.from(deleteExercise).forEach( element => {
    element.addEventListener('click', exerciseDelete) // adding click event to each element
})

async function exerciseDelete(){
    const exerciseName = this.parentNode.childNodes[1].innerText // looking into the html element object and finding its text, which would be the exercise name
    console.log(exerciseName)
  //  if (exerciseName){
       
       
       
        try{
            const response = await fetch('deleteExercise', { // awaiting data to come from deleteExercise ping
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
    //}


     
    }

