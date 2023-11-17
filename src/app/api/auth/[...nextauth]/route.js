import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // That's what appears in the signin form
            name: "Correo y contraseña",
            credentials: {
                username: { label: "usuario", type: "text", placeholder: "Emilio" },
                password: { label: "Contraseña", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const user = ({ id: "1", username: "Alejandro", password: "petrolhead2023" })
                return user
            }

        })
    ],
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt({ account, token, user, profile, session, trigger }) {
            console.log("account", account, "user", user, "profile", profile, "session", session, "token", token, "trigger", trigger)
            return token;

        },
        session({ session, token }) {
            console.log("token", token, "session", session)
            return session
        }
    }
})

export { handler as GET, handler as POST }