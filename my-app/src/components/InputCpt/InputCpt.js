import React from "react"
import './InputCpt.css';
import Tekst from "../Tekst/Tekst";
import RegisterButton from "../RegisterButton/RegisterButton";
import Input from "../input/input";


const InputCpt = () => {
  return (
    <div className="InputCpt">      
        <div class="login-forma">
        <Tekst tekst="Ime" />
        <Input type="text" placeholder="Unesite vase ime"/>
       <Tekst tekst="Prezime" />
       <Input type="text" placeholder="Unesite vase prezime"/>
       <Tekst tekst="Email" />
       <Input type="email" placeholder="Unesite vasu email adresu"/>
       <Tekst tekst="Sifra  " />
       <Input type="password" placeholder="Unesite sifru"/>
       <Tekst tekst="Ponovite sifru" />
       <Input type="password" placeholder="Ponovite sifru"/>
      <RegisterButton klasa="registerButton" text="Registruj se!" color="lightsalmon"/>
      </div>   
    </div>
  );
}

export default InputCpt;
