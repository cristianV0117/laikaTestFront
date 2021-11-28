class Users
{
    constructor()
    {
        this.route = "https://laika-api-app.herokuapp.com/api/v1/users"
        this.alert = document.getElementById('alert')
        this.body = document.getElementById('usersBody')
    }

    saveUsers()
    {
        document.getElementById('registerUsersForm').addEventListener('submit', event => {
            event.preventDefault()
				const data = {
					'user_name': document.getElementById('user_name').value,
                    'first_name': document.getElementById('first_name').value,
                    'second_name': document.getElementById('second_name').value,
                    'first_last_name': document.getElementById('first_last_name').value,
                    'second_last_name': document.getElementById('second_last_name').value,
                    'email': document.getElementById('email').value,
                    'cellphone': document.getElementById('cellphone').value,
					'password': document.getElementById('password').value,
                    'country_id': document.getElementById('country_id').value,
				}
                fetch(this.route, {
                    method: 'POST',
                    headers: {
                        'authorization': "601b422c-786f-463c-8eae-971a7bf08f92",
                        'Accept': 'application/json',
                		'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(json => json.json())
                    .then(response => {
                        console.log(response.status)
                        if (response.status == 201) {
                            this.alert.innerHTML = `<hr /><div class="alert alert-success" role="alert">
                                Se ha insertado el usuario ${response.message[0].user_name}
                            </div>`;
                            setTimeout(() => {
                                location.replace("/");
                            }, 1500);
                        } else {
                            console.log(response.message)
                        }
                    })
        });
    }

    users()
    {
        fetch(this.route, {
            method: 'GET',
            headers: {
                'authorization': "601b422c-786f-463c-8eae-971a7bf08f92"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 400) {
                    this.alert.innerHTML = `<div class="alert alert-danger" role="alert">${data.message}</div>`
                } else if (data.status == 401) {
                    this.alert.innerHTML = `<div class="alert alert-danger" role="alert">${data.message}</div>`
                } else {
                    if (data.message.length > 0) {
                        data.message.forEach(element => {
                            this.body.innerHTML += `<tr>
                                <td>${element.id}</td>
                                <td>${element.user_name}</td>
                                <td>${element.first_name}</td>
                                <td>${element.first_last_name}</td>
                                <td>${element.email}</td>
                                <td>${element.country}</td>
                            </tr>`
                        });
                    } else {
                        this.alert.innerHTML = `<div class="alert alert-warning" role="alert">
                            No hay información
                        </div>`
                    }
                }
            })
        return this
    }

}
(new Users()).users().saveUsers()