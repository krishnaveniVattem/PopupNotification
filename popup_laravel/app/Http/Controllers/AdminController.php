<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\admin;
use App\messages;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       $users = admin::all();
        return $users;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            "username"=>'required',
            "userid"=>'required'
        ]);
        
        $user = new admin;
        $user->username = $request->input('username');
        $user->userid = $request->input('userid');
        $user->save();
       
        $curl = curl_init();
            
        curl_setopt_array($curl, array(

        CURLOPT_URL => "http://localhost:9000/reciever",

        CURLOPT_RETURNTRANSFER => true,
 
        CURLOPT_MAXREDIRS => 10,

        CURLOPT_TIMEOUT => 30000,

        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,

        CURLOPT_CUSTOMREQUEST => "POST",

        CURLOPT_POSTFIELDS => json_encode($user),

        CURLOPT_HTTPHEADER => array(

       
        "accept: */*",

        "accept-language: en-US,en;q=0.8",

        "content-type: application/json",

        ),

        ));

        $response = curl_exec($curl);

        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {

        echo "cURL Error #:" . $err;

        } 
        
        else {
           echo $response;
         return view('welcome')->with('success', 'admin Added');

        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}