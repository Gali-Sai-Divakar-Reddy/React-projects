import React, { useState } from 'react'

const Profile = () => {
    const [profile, setProfile] = useState(
        {name: "Divakar", age: 25}
    )
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const handleUpdate = () => {
        if (name.trim() !== "" && age) {
            setProfile({ name: name, age: parseInt(age)})
            setName("")
            setAge("")
        }
    }

  return (
    <div>
        <h1>profile name: {profile.name}</h1>
        <h2>age: {profile.age}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='name'/>
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='age'/>
        <button onClick={handleUpdate}>update</button>

    </div>
  )
}

export default Profile