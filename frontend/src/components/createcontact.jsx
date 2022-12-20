import { useState } from "react";
import("../css/createcontact.css");
import { Link } from "react-router-dom";


const CreateContact = () => {
  const parrafo = document.getElementById("alertParrafo");

  const [form, setForm] = useState({ 
    name: "",
    surname: "",
    tNumber: "",
    address: "",
    bdate: ""
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newPerson = { ...form };

    try {
      const response = await fetch("http://localhost:8080/contacts/createcontact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      });
      const data = await response.json();
      if (response.ok) {
        parrafo.textContent = data;
        parrafo.style.backgroundColor = "green";
        parrafo.style.color = "white";
      } else {
        parrafo.textContent = "Ya existe un contacto con este Numero";
        parrafo.style.color = "white";
        parrafo.style.background = "red";
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="body-header">
      <div className="containerForm">
        <form className="form_signup" onSubmit={onSubmit}>
          <h2>Agrege un nuevo Contacto!</h2>
          <label>Nombre:</label>
          <input
            className="form-inputs"
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
          <label>Apellido:</label>
          <input
            className="form-inputs"
            type="text"
            placeholder="Apellido"
            value={form.surname}
            onChange={(e) => updateForm({ surname: e.target.value })}
          />
          <label>Telefono:</label>
          <input
            className="form-inputs"
            type="number"
            placeholder="Telefono"
            value={form.tNumber}
            onChange={(e) => updateForm({ tNumber: e.target.value })}
          />
          <label>Direccion:</label>
          <input
            className="form-inputs"
            type="text"
            placeholder="Direccion"
            value={form.address}
            onChange={(e) => updateForm({ address: e.target.value })}

          />
          <label>Fecha de Nacimiento:</label>
          <input
          className="form-inputs"
            type="date"
            value={form.bdate}
            onChange={(e) => updateForm({ bdate: e.target.value })}
            />

          <button className="button_signup" type="submit">
            <span>Agregar!</span>
          </button>
          
          <p id="alertParrafo"></p>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;