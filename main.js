let tbody = document.getElementById('tbody')


let users = [
    {
        name: 'Deveon Lane',
        visit: 'OPD-2345',
        date: '5/7/21',
        gender: 'Male',
        diseases: 'Diabets',
        status: 'Out-Patient'
    },
    {
        name: 'Deveon Lane',
        visit: 'OPD-2345',
        date: '5/7/21',
        gender: 'Male',
        diseases: 'Diabets',
        status: 'Out-Patient'
    },
    {
        name: 'Deveon Lane',
        visit: 'OPD-2345',
        date: '5/7/21',
        gender: 'Male',
        diseases: 'Diabets',
        status: 'Out-Patient'
    },
    {
        name: 'Deveon Lane',
        visit: 'OPD-2345',
        date: '5/7/21',
        gender: 'Male',
        diseases: 'Diabets',
        status: 'Out-Patient'
    },
]

function getUsers() {
    let a = users.map(item => `<tr class="tra">
       <td>${item.name}</td>
       <td>${item.visit}</td>
       <td>${item.date}</td>
       <td>${item.gender}</td>
       <td>${item.diseases}</td>
       <td>${item.status}</td>
       <td><img width="4px" src="./foto/png9.png" alt=""></td>
    </tr>`)
    tbody.innerHTML = a.join(" ")
    
}
getUsers()