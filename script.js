var filterbtn = document.getElementsByTagName('button')[0]
var adduserbtn = document.getElementsByTagName('button')[1]
var profession = document.getElementById('profession')
var nametake = document.getElementById('nametake')
var professiontake = document.getElementById('professiontake')
var agetake = document.getElementById('agetake')
var cardsDiv = document.getElementsByTagName('div')[2]
//selecting elements

//main array
var array = [
        { id: 1, name: "John", age: "18", profession: "Developer" },
        { id: 2, name: "Jack", age: "20", profession: "Developer" },
        { id: 3, name: "Karen", age: "19", profession: "Admin" }
    ]

//this count is to assign ID to new row entry    
var count = 1;    

// displaying cards/array objects to page using foreach function
array.forEach((e)=>{
    let newcarddiv = document.createElement("div")
    newcarddiv.className = 'box'
    newcarddiv.innerHTML = `${e.id}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${e.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${e.age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${e.profession}`
    cardsDiv.append(newcarddiv)
    count++
})


// function to filter by profession using Drop-Down
function filtration(){
    //reading user input value
    value = profession.value

    if(value == 'Developer'){
        //clearing field
        cardsDiv.innerHTML = ''
        //using filter function to filter by Developer
        let developers = array.filter(e => e.profession == "Developer")
        //displaying filtered data to page
        developers.forEach((e)=>{
            let newcarddiv = document.createElement("div")
            newcarddiv.className = 'box'
            newcarddiv.innerHTML = `${e.id}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${e.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${e.age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${e.profession}`
            cardsDiv.append(newcarddiv)
        })
    }

    else if(value == 'Admin'){
        //clearing field
        cardsDiv.innerHTML = ''
        //using filter function to filter by Admin
        let developers = array.filter(e => e.profession == "Admin")
        //displaying filtered data to page
        developers.forEach((e)=>{
            let newcarddiv = document.createElement("div")
            newcarddiv.className = 'box'
            newcarddiv.innerHTML = `${e.id}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${e.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${e.age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${e.profession}`
            cardsDiv.append(newcarddiv)
        })
    }

    else{
        //if no profession selected, show error
        alert('Please select profession')
    }
}

//drop-down
filterbtn.addEventListener('click', filtration)

//function to insert new data/rows to existing data
function addingEntries(){
    //checking if all the input fields are filled
    if(nametake.value == '' || professiontake.value == ' ' || agetake.value == '' ){
        alert('Please fill all the values before submitting!!')
    }
    else{
        //tip: can use spread method to do the same, let's not make it difficult to read by using spread here
        array.push({ id: count, name: nametake.value, age: agetake.value , profession: professiontake.value })
        count++
        //clearing previous fields
        cardsDiv.innerHTML = ''
        //displaying updated record
        array.forEach((e)=>{
            let newcarddiv = document.createElement("div")
            newcarddiv.className = 'box'
            newcarddiv.innerHTML = `${e.id}. &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Name: ${e.name} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Age: ${e.age} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Profession: ${e.profession}`
            cardsDiv.append(newcarddiv)
        })
        //clearing input fields data
        nametake.value = ""
        agetake.value = ""
        professiontake.value = ''
        //console log the same updated data
        console.log(array)
    }
}

adduserbtn.addEventListener('click', addingEntries)