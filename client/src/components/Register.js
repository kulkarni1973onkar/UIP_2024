const Register = () => 
    {
        return(
            <body>
                <h1>Register Page</h1>
                <form id="RegUser" action="ReggedUser" method="post">
                    <div classname="form">
                        <label for="name">Name:</label>
                        <input type="text" id="name" required/>
                    </div>
                        <div>
                            <label for="First Name">First Name:</label>
                            <input type="fname" id="fname" name="fname" required/>
                        </div>
                        <div>
                            <label for="Last Name">Last Name:</label>
                            <input type="lname" id="lname" name="lname" required/>
                        </div>
                        <div>
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" required/>
                        </div>

                        <div>
                            <button type="submit" value="register">Register</button>
                      </div>
                </form>
            </body>
        );
    }

    export default Register;