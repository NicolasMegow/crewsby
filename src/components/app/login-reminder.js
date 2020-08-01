import React from "react"
import { Link } from "gatsby"
import { useAuth0 } from "../../../plugins/gatsby-plugin-auth0"
import Emoji from "../shared/emoji"

const LoginReminder = () => {
    const { loginWithPopup } = useAuth0()
    return (
        <>
            <p><Emoji symbol="👉" label="duble" />{' '}
            <Link to='/'  onClick={event => {
                        event.preventDefault()
                        loginWithPopup({ action: 'signup' })
                        }}>
                        Meld Dich kostenlos an, 
                    </Link>
            {' '}um Deinen Fortschritt zu speichern und Infos zu neuen Trainings zu erhalten.
            </p>
        </>
    )
}

export default LoginReminder