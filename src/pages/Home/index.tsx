import { useState, useEffect } from "react";
import { Card, CardProps } from "../../components/Card";
import "./style.css";

export function Home() {
  const [user, setUser] = useState({} as User);
  const [studentName, setStudentName] = useState('')
  const [students, setStudent] = useState<CardProps[]>([])

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
  })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudent(previousState => [...previousState, newStudent])

    setStudentName('')

  }

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
        <div>
            <strong>{user.name}</strong>            
            <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>

        <input type="text" 
        placeholder="Digite o nome.."
        onChange={event => setStudentName(event.target.value)}
        value={studentName}
         />

        <button
        onClick={handleAddStudent}>Adicionar</button>

        {
        students.map( student => 
          <Card 
          key={student.time}
          name={student.name}
          time={student.time}/>
        )
        }
    </div>
  );
}
