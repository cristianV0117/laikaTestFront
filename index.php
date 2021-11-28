<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="/public/css/global.css" rel="stylesheet">

    <title>Hello, world!</title>
  </head>
  <body>
    <div class="container">
        <br />
        <div id="alert"></div>
        <div class="card mt-3">
            <div class="card-header">
                <center><h4>Registrar usuario</h4></center>
            </div>
            <div class="card-body">
                <form id="registerUsersForm">
                    <label>Nombre de usuario</label>
                    <input id="user_name" class="form-control" type="text" required>
                    <div class="row">
                        <div class="col-md-3">
                            <label>Primer nombre</label>
                            <input id="first_name" class="form-control" type="text" required>
                        </div>
                        <div class="col-md-3">
                            <label>Segundo nombre</label>
                            <input id="second_name" class="form-control" type="text">
                        </div>
                        <div class="col-md-3">
                            <label>Primer apellido</label>
                            <input id="first_last_name" class="form-control" type="text" required>
                        </div>
                        <div class="col-md-3">
                            <label>Segundo apellido</label>
                            <input id="second_last_name" class="form-control" type="text">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <label>Email</label>
                            <input id="email" class="form-control" type="email" required>
                        </div>
                        <div class="col-md-3">
                            <label>Celular</label>
                            <input id="cellphone" class="form-control" type="text" required>
                        </div>
                        <div class="col-md-3">
                            <label>Contraseña</label>
                            <input id="password" class="form-control" type="password" required>
                        </div>
                        <div class="col-md-3">
                            <label>País</label>
                            <select class="form-control" id="country_id" required>
                                <option value="">-- PAÍS --</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <button class="btn btn-outline-success">Registrar</button>
                </form>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header">
                <center><h4>Usuarios</h4></center>
            </div>
            <div class="card-body">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre usuario</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody id="usersBody"></tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="/public/js/users.js"></script>
  </body>
</html>