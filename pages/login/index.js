import Layout from "../../components/layout"

// Adiciona dados do usuario

export default function Login () {
    return (
        <Layout>
            <div>
                <h3>Login</h3>

                <div>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="password"></input>
                </div>


            
            </div>
        </Layout>
    )
}