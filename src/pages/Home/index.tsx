import React, { useState, useEffect } from "react";
import './style.css'

export function Home(){
    const [user, setUser] = useState({} as User)


    type User = {
        name:string,
        avatar: string
    }

    

    return(
        <div className="container">
            <h1>Lista de presença</h1>

            <input type="text"
            placeholder="Digite o nome.."
            />

            <button>Adicionar</button>

            {/* <Card></Card> */}
        </div>
    )
}