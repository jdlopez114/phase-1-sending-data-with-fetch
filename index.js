// Add your code here

function submitData(name, email){

const configObj = {
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        name : `${name}`,
        email : `${email}`
})
}

const body = document.querySelector('body')
body.className = 'body'

return fetch('http://localhost:3000/users', configObj)
.then(response => response.json())
.then(obj => body.append(obj.id))
.catch(error => body.append(error.message))

}

// const renderUserData = data => 

submitData('Peter', 'pparker@esu.edu');