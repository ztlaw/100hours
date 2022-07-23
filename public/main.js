console.log('We are connected')
const exerciseContainer = document.querySelectorAll('.container') // selecting all .container class elements
const deleteExercise = document.querySelectorAll('.bi-x-circle') // selecting all X image elements
const completeExercise = document.querySelectorAll('.bi-check-square')


//CREATING DELETE CLICK EVENTS AND FUNCTIONS
Array.from(deleteExercise).forEach( element => {
    element.addEventListener('click', exerciseDelete) // adding click event to each element
})

async function exerciseDelete(){
    const exerciseName = this.parentNode.childNodes[1].innerText // looking into the html element object and finding its text, which would be the exercise name  
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
      }

 //what do i want to add here?
  // after clicking the complete exercise, each exercise will turn from neutral color to green, and it gets placed into local storage? 
  //we will be able to find the old workouts with the click of a button coming from local storage. 
  //need to find a better way to archive completed exercises
Array.from(completeExercise).forEach( element => {
  element.addEventListener('click', exerciseDone) // adding click event to each element
  })

  async function exerciseDone() {
    this.parentNode.parentNode.style.background = 'green'
    console.log(this)
    try{
      const response = await fetch('completedExercise', { // awaiting data to come from deleteExercise ping
          method: 'update',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'exerciseS': exerciseName ///need to fix this. need to use clickevent to move object into a different collection. 
          })
        })
      const data = await response.json()
      console.log(data)
     location.reload()

  }catch(err){
      console.log(err)
  }
  }




  //next thing to add -- user authentification 