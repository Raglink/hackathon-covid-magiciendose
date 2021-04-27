import React, {useEffect, useState} from "react"
import "./main.css"

import VaccineDosePerCenter from "../../components/VaccineDosePerCenter"

const DdForm = () => {
    const dataStructuredepartment = [
        {center:{
            name:"centre 1",
            vaccines:[
                {pfiser:[null,null],
                moderna:[null,null]}
            ]
  
        }},
    ]
    const [fields, setFields] = useState(dataStructuredepartment)
     //  ----- NEED TO BE AUTOMATIZED -----
     //  ----- NEED TO BE AUTOMATIZED -----
     let warningPfizer = null
     let warningModerna = null
    let sumPfizer = null
    let sumModerna = null

    useEffect(()=>{
 
    },[fields])

     const handleChange = (path , value )=>{
         console.log("path : ", path)
         const tempValue= {...fields}
         if(path ===1) {tempValue[0].center.vaccines[0].pfiser[0] = value*1}
         if(path ===2) {tempValue[0].center.vaccines[0].pfiser[1] = value*1}
         if(path ===3) {tempValue[0].center.vaccines[0].moderna[0] = value*1}
         if(path ===4) {tempValue[0].center.vaccines[0].moderna[1] = value*1}
         setFields(tempValue)
         sumPfizer = tempValue[0].center.vaccines[0].pfiser[0] + tempValue[0].center.vaccines[0].pfiser[1]
         console.log("sumPfizer : ", sumPfizer)
         warningPfizer = <p>Merci de saisir un multiple de 6 pour faire une boite complète</p>
         if(sumPfizer % 6 ==0){
            warningPfizer =null
         }
         sumModerna= tempValue[0].center.vaccines[0].moderna[0] + tempValue[0].center.vaccines[0].moderna[1]
         warningModerna = <p>Merci de saisir un multiple de 10 pour faire une boite complète</p>
         if(sumModerna % 10 ==0){
             warningModerna =null
         }
         console.log("warningPfizer : ", warningPfizer)
     }

    return (
        <div className="dd-form">
            <h1>Essonne</h1>
            <div className="paper">
            <p>Saisissez le formulaire pour la semaine numéro 17</p>
            <p>Répartition des 500 doses Pfizer et 400 doses Moderna</p>
           
        {/* {fields.map((field, index)=>{
            return ( <VaccineDosePerCenter 
                field={field}
                key={index}
                index={index}
            />)
        })} */}
            <h2>{fields[0].center.name}</h2>
            <label> Pfiser dose 1 <input value={fields[0].center.vaccines[0].pfiser[0] ||""} onChange={(e)=>{handleChange( 1 , e.target.value)}} type="number"/></label>
            <label> Pfiser dose 2 <input value={fields[0].center.vaccines[0].pfiser[1] ||""} onChange={(e)=>{handleChange( 2, e.target.value)}} type="number"/></label>
           {warningPfizer}
            <label> Moderna dose 1 <input value={fields[0].center.vaccines[0].moderna[0] ||""} onChange={(e)=>{handleChange(3 ,e.target.value)}} type="number"/></label>
            <label> Moderna dose 2 <input value={fields[0].center.vaccines[0].moderna[1] ||""} onChange={(e)=>{handleChange(4,e.target.value)}} type="number"/></label>
            {warningModerna}


            <button>Validation</button>
            </div>
        </div>)
}

export default DdForm 