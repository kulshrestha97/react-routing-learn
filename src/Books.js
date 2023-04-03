import { Link, Route, Routes } from "react-router-dom"
import Book from "./Book"

const Books = () => 
<>
    <Link to={'/Books/1'}>Book1</Link>
    <Link to={'/Books/2'}>Book2</Link>
    <Link to={'/Books/new'}>New</Link>
    
    
    </>


export default Books