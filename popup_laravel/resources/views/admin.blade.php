
<!doctype html>
<html >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">       
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }
            .heading{
                width:50%;
                text-align: center;
                margin:auto;

            }
            a{
                text-decoration: none;
            }
            .inputForm{
                width:50%;
                margin:auto;
            }

        </style>
    </head>
    <body>
   
            <div class="heading">
                <h1>Add user</h1>                      
            </div>
            <div class='container'>
                @include('Error')
            </div>
            <div class="inputForm">
                {{ Form::open(array('url' => 'admin','method'=>'post')) }}
                <div class="form-group">
                    {{Form::label('name', 'Name')}}
                    {{Form::text('username','', ['class'=>'form-control', 'placeholder'=>'Enter name'])}}
                </div>
                <div class="form-group">
                    {{Form::label('userid', 'UserId')}}
                    {{Form::text('userid','',['class'=>'form-control', 'placeholder'=>'Enter id'])}}
                </div>
                {{Form::submit('submit',['class'=>'btn btn-primary'])}}
                {{ Form::close() }}            
            </div>
   
    </body>
</html>
</div>
</div>
</body>