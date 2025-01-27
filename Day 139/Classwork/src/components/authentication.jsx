import { setLocalStorage } from "../utils/localStorage";

const Auntentication = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const accaunt = {
            username : e.target.username.value,
            email : e.target.email.value,
            password : e.target.password.value
        };
        setLocalStorage(accaunt.email, accaunt);
        
    }
    return (
        <div>
            <section>
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username: "  name="username" required/>
                <input type="email" placeholder="Enter email please: " name="email"  required/>
                <input type="password" placeholder="Enter password please: " name="password" minLength={5} maxLength={10}  required/>
                <button>Register</button>  
            </form>

            </section>
            <section>
                <h2>Authorization</h2>

            </section>
        </div>
    )
}

export default Auntentication