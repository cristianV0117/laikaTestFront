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
            alert("hola")
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
                            this.body.innerHTML = `<tr>
                                <td>${element.id}</td>
                                <td>${element.user_name}</td>
                                <td>${element.first_name}</td>
                                <td>${element.first_last_name}</td>
                                <td>${element.email}</td>
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