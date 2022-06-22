//Function to choose a random item from list

const choice = (items) => {
  let index = Math.floor(Math.random() * items.length)
  return items[index];
}


//function to remove first matching item from items list

const remove = (items,item) =>{
    for (let i =0; i <items.length; i++){
        if (items[i] === item){
            return [...items.slice(0,i), ...items.slice(i+1)]
        }
    }
}

export {choice, remove}
