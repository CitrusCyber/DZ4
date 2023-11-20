document.addEventListener('DOMContentLoaded', () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'peoples.json')
    request.setRequestHeader('Content-type', 'application/json')
    request.send()

    request.addEventListener('load', () => {
        if(request.status === 200){
            const peoples = JSON.parse(request.response)
            displayPeople(peoples)
            console.log(peoples)
        }else{
            console.error('Error loading data')
        }
    })
})

function displayPeople(peopleArray){
    const wrapper = document.getElementById('people-list')

    wrapper.innerHTML = ''

    peopleArray.forEach(person => {
        const personElement = document.createElement('div')
        personElement.className = 'card'

        const imgElement = document.createElement('img')
        imgElement.src = person.img
        personElement.appendChild(imgElement)

        const nameElement = document.createElement('span')
        nameElement.className = 'name'
        nameElement.textContent = person.name
        personElement.appendChild(nameElement)

        const ageElement = document.createElement('span')
        ageElement.className = 'age'
        ageElement.textContent = `Age: ${person.age}`
        personElement.appendChild(ageElement)

        const rankElement = document.createElement('span')
        rankElement.className = 'rank'
        rankElement.textContent = `Rank: ${person.rank}`
        personElement.appendChild(rankElement)

        const kaguneElement = document.createElement('span')
        kaguneElement.className =  'kagune'
        kaguneElement.textContent = `Kagune: ${person.kagune}`
        personElement.appendChild(kaguneElement)


        wrapper.appendChild(personElement)
    })
}