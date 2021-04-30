import React, {useEffect, useState } from "react"


import "./main.css"
import VaccineDoseInput from "../../components/VaccineDoseInput"
import VaccineDosePerCent from "../../components/VaccineDosePerCent"

import dataStructure from "../../mock/dataStructure"

const ArsForm = () => {

    const [fields, setFields] = useState(dataStructure)
    const [vaccineSumGlobal, setVaccineSumGlobal] = useState(0)
    
    const doseToPerCent =(value)=>{
        return value/vaccineSumGlobal *100 
    }

    useEffect(()=>{
        setVaccineSumGlobal(fields.vaccines.reduce((prev, cur)=> {return prev + cur.nb_dose},0))
    },[fields])

    useEffect(()=>{
        const tempValue = {...fields}
        tempValue.departement.map((item)=>{return(
            item.dosePercent=Math.trunc(doseToPerCent(item.totalDose))
            ) 
        })
        setFields(tempValue)
    },[vaccineSumGlobal])

    const convertPerCentToDose = (value)=>{
        return Math.trunc(vaccineSumGlobal*value/100)
    } 
    
    const fieldChange = (path, index, value, subIndex) => {
        value = value * 1
        const tempValue = {...fields}
            if(path === "vaccinesGlobal"){
                tempValue.vaccines[index].nb_dose= value
                tempValue.departement.map((item)=>{return(
                    item.dosePercent=doseToPerCent(item.totalDose).toFixed(2)
                    ) 
                })
            }
            if(path === "departementPerCent"){
                tempValue.departement[index].totalDose= convertPerCentToDose(value)
                tempValue.departement[index].dosePercent= value
            }
            if(path === "departementPerDose"){
                tempValue.departement[index].totalDose= value
                tempValue.departement[index].dosePercent= doseToPerCent(value).toFixed(3)
            }
            if(path === "departementPerDosePerName"){
                tempValue.departement[index].vaccines[subIndex].nombresDose = value
            }
        setFields(tempValue)
    }

    return (
        <div className="ars-form">
            <h1>ARS : Ile de France</h1>
            <div className="paper">
                <p>Saisissez le formulaire pour la semaine numéro 17</p>
                {fields.vaccines.map((field, index) => {return (
                    <VaccineDoseInput 
                        field={field}
                        fieldChange={fieldChange}
                        index={index}
                        key={index}
                    />
                )}
                )}
                <p>Nombre total de doses à répartir : {vaccineSumGlobal}</p>
                <hr/>
                <h2>Répartiton des doses</h2>
                {fields.departement.map((field, index) => {return(
                    <VaccineDosePerCent
                        field={field}
                        fieldChange={fieldChange}
                        index={index}
                        key={index}
                        vaccineSumGlobal={vaccineSumGlobal}
                    />
                )})}
                <button>Validation</button>
            </div>
        </div>
    )
}

export default ArsForm