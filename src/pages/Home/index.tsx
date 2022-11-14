import React, { useState, useEffect } from "react";
import { Card } from "../../components/Card";
import "./style.css";

export function Home() {
  const [user, setUser] = useState({} as User);

  type User = {
    name: string;
    avatar: string;
  };

  useEffect(() => {
    fetch('http://api.github.com/users/fernandosantoshs')
    .then(response => response.json())
    .then(data => { 
        setUser({
        name: data.name,
        avatar: data.avatar_url
    })
    })
}

  )

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
            <strong>{user.name}</strong>            
            <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

        <input type="text" placeholder="Digite o nome.." />

        <button>Adicionar</button>

      <Card/>
    </div>
  );
}
