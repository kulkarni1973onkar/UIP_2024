const Login = () => 
    {
        return(
            <body>
                <h1>Login Page</h1>
                <form id="LogUser" action="Loggedin" method="post">
                    <div classname="form">
                        <label for="usernname">Username:</label>
                        <input type="text" id="username" required/>
                    </div>
                        <div>
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required/>
                        </div>
                        <div>
                            <label for="Confirm password">Confirm Password:</label>
                            <input type="password" id="confirm-password" name="password" required/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>

                        <div>
                            <button type="submit" value="register">Submit</button>
                      </div>
                </form>
            </body>
        );
    }

    export default Login;