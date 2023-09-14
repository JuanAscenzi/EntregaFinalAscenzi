import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setphone] = useState('')
    const [email, setemail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
        onConfirm(userData)
    }
    return(
        <div className="Container">
            <form onSubmit={handleConfirm} className='Form'>
                <label className="Label">
                    Nombre
                    <input 
                        className="Input"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        />
                </label>
            </form>
        </div>
    )
}