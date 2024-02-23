import { useState } from 'react'
import './App.css'

import Form from './components/Form'
import Output from './components/Output'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Form/>
            <Output/>
            <Footer/>
        </>
    )
}