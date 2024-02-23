import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Output from './components/Output'
import Footer from './components/Footer'

export default function App() {
    const [cv, setCv] = useState({})
    const [submittedCv, setSubmittedCv] = useState(null)

    return (
        <>
            <Form 
                cv={cv} 
                changeCv={(cv) => setCv(cv)} 
                submitCv={(cv) => setSubmittedCv(cv)}
            />
            <Output submittedCv={submittedCv}/>
            <Footer/>
        </>
    )
}