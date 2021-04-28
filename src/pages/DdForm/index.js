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

     const [warningPfizer, setWarningPfizer]= useState(null)
     const [warningModerna, setWarningModerna]= useState(null)
     const [sumPfizer, setSumPfizer]= useState(null)
     const [sumModerna, setSumModerna]= useState(null)

     const fillABox = (dosesCount, boxSize, updateWarning)=>{
         if(dosesCount % boxSize ==0){
            updateWarning(null)
            return
         }
         updateWarning(<p className="warning">Merci de saisir un multiple de {boxSize} pour faire une boite complète</p>)
        }
    useEffect(()=>{
        setSumPfizer( fields[0].center.vaccines[0].pfiser[0] + fields[0].center.vaccines[0].pfiser[1])
        setSumModerna(fields[0].center.vaccines[0].moderna[0] + fields[0].center.vaccines[0].moderna[1])
    },[fields])

    useEffect(()=>{
        fillABox(sumPfizer, 6, setWarningPfizer)
    },[sumPfizer])
    useEffect(()=>{
        fillABox(sumModerna, 10, setWarningModerna)
    },[sumModerna])

     const handleChange = (path , value )=>{
         console.log("path : ", path)
         const tempValue= {...fields}
         if(path ===1) {tempValue[0].center.vaccines[0].pfiser[0] = value*1}
         if(path ===2) {tempValue[0].center.vaccines[0].pfiser[1] = value*1}
         if(path ===3) {tempValue[0].center.vaccines[0].moderna[0] = value*1}
         if(path ===4) {tempValue[0].center.vaccines[0].moderna[1] = value*1}
         setFields(tempValue)

     }

    return (
        <div className="dd-form">
            <h1>Essonne</h1>
            <div className="paper">
            <p>Saisissez le formulaire pour la semaine numéro 17</p>
            <p>Répartition des 500 doses Pfizer et 400 doses Moderna</p>

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