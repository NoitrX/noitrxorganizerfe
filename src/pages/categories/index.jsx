import { Navigate } from "react-router-dom"
import { Container, Table, Spinner } from 'react-bootstrap';
import Sbutton from "../../components/Button"
import SBreadcrumb from "../../components/Breadcrumb"
import SNavbar from "../../components/Navbar"
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from '../../configs'
import { useNavigate } from "react-router-dom";

export default function PageCategories() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    const getCategoriesAPI = async () => {
        setIsLoading(true)
        try {
            const res = await axios.get(`${config.api_host_dev}/cms/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setTimeout(() => {
                setIsLoading(false)

                setData(res.data.data)
            }, 1000)

        } catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }
    useEffect(() => {
        getCategoriesAPI()
    }, [])
    if (!token) {
        return <Navigate to={'/signin'} replace={true} />
    }

    return (
        <>
            <SNavbar />
            <Container >
                <SBreadcrumb textSecond={'Categories'} />
                <Sbutton action={() => navigate('/categories/create')}>Tambah Data</Sbutton>

                <Table className="mt-3" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Log</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td colSpan={3} style={{ textAlign: 'center' }}>
                                    <div className="flex items-center justify-center">
                                        <Spinner animation="grow" variant="light" />
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            data.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{(index + 1)}</td>
                                        <td>{data.name}</td>
                                        <td>Otto</td>
                                    </tr>
                                )

                            })
                        )}




                    </tbody>
                </Table>
            </Container>
        </>
    )
}
