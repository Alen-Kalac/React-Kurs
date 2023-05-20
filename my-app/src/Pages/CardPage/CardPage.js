import React from "react"
import './CardPage.css';
import Card from "../../components/Card/Card";

const userData = [{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},{
  id:1,
  name:"Alen",
  lastName:"Kalac",
  age:23
},
{
  id:2,
  name:"Demir",
  lastName:"Subasic",
  age:22,
},
{
  id:3,
  name:"Umer",
  lastName:"Sacirovic",
  age:17,
},
]

const CardPage = (props) => {
  return (
    <div className="CardPage">
      {userData.map((data)=>(
        <Card 
        key={data.id}
        name={data.name}
        lastName={data.lastName}
        age={data.age}
        />
      ))}
       {/* <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       <Card name="Alen" lastName="Kalac" age="23" />
       <Card name="Umer" lastName="Sacirovic" age="17" />
       <Card name="Demir" lastName="Subasic" age="22" />
       <Card name="Dzenis" lastName="Hacanin" age="24" />
       

        */}

    </div>
  );
}

export default CardPage;
