
<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Laravel</title>
        <link rel="stylesheet" href="css/app.css">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>

        </style>
    </head>
    <body>
        <div class="container-fluid" id="app">
            <div class="row">
                <div class="col-md">
                    <button type="button" onclick="window.location='{{ url("admin/create") }}'">Admin</button>
                     <button type="button"  onclick="window.location='{{ url("messege/create") }}'">User</button>
                </div>
            </div>
        </div>
       
       
</body>
</html>
