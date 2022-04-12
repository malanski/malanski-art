import Layout from "../../components/layout"

// Adiciona dados do usuario

export default function Register () {
    return (
        <Layout>
            <div>
                <h3>Register</h3>

                <div>
                    <input type="text" placeholder="name"></input><br/>
                    <input type="text" placeholder="last name"></input><br/>
                    <input type="email" placeholder="E-mail"></input><br/>
                    <input type="text" placeholder="CPF"></input><br/>
                    <input type="email" placeholder="Confirm E-mail"></input><br/>
                    <input type="password" placeholder="password"></input><br/>
                    <input type="password" placeholder="Confirm password"></input>

                </div>


            
            </div>
        </Layout>
    )
}