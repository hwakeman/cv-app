import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Output from './components/Output'
import Footer from './components/Footer'
import Cv from './models/cv'

export default function App() {
    return (
        <>
            <Form/>
            <Output/>
            <Footer/>
        </>
    )
}