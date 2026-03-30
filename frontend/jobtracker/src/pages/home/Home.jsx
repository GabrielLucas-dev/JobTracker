import { useEffect } from "react"
import Content from "../../components/content/Content"
import Header from "../../components/header/Header"
import { useNavigate } from 'react-router-dom'

function Home() {
    
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    
    useEffect(() => {
        if(!token) {
            navigate("/login")
        } 
    }, [token, navigate])

    return(
        <>
            <Content />
        </>
    )
}

export default Home