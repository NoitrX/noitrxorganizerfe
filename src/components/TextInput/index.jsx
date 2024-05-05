import { Form } from "react-bootstrap"

export default function TextInput({ name, value, type, onChange, placeholder }) {
    return (
        <Form.Control type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
    )
}
