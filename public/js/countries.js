class Countries
{
    constructor()
    {
        this.route = "https://laika-api-app.herokuapp.com/api/v1/countries"
    }

    countries()
    {
        fetch(this.route, {
            method: 'GET',
            headers: {
                'authorization': "601b422c-786f-463c-8eae-971a7bf08f92"
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status == 200) {
                    data.message.forEach(element => {
                        document.getElementById('country_id').innerHTML += `
                            <option value="${element.id}">${element.country}</option>
                        `
                    })
                } else {
                    console.log(data.message)
                }
            })
        return this
    }
}
(new Countries).countries()