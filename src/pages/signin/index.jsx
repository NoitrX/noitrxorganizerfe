import { Card, Container } from 'react-bootstrap';
import { postData } from "../../utils/fetch"
import { useState } from 'react';
import SAlert from '../../components/Alert';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import SForm from './form';
import { userLogin } from "../../redux/auth/actions.js"

function PageSignin() {
    const dispatch = useDispatch()


    const navigate = useNavigate()
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    //  Can Be Right This

    const [form, setForm] = useState({
        email: '',
        password: ""
    })


    const [isLoading, setIsLoading] = useState(false)
    const [alert, setAlert] = useState({
        status: false,
        message: '',
        type: 'danger'
    })


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            const res = await postData(`/cms/auth/signin`, form)
            dispatch(userLogin(res.data.data.token, res.data.data.role))
            setIsLoading(false)
            navigate('/')
        } catch (err) {
            setIsLoading(false)
            setAlert({ status: true, message: err?.response?.data?.msg ?? 'Internal Server Error', type: 'danger' })
        }

    }


    return (
        <Container md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

            <Card style={{ width: '24rem' }}>
                {alert.status && <SAlert message={alert.message} type={alert.type} />}
                <Card.Body>
                    <Card.Title>Login Form</Card.Title>
                    <SForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />

                </Card.Body>
            </Card>
        </Container>
    );
}

export default PageSignin;