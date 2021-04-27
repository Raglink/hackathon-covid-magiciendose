import React, {useEffect, useState } from "react"


import "./main.css"
import VaccineDoseInput from "../../components/VaccineDoseInput"
import VaccineDosePerCent from "../../components/VaccineDosePerCent"

const ArsForm = () => {
    const dataStructure = {
        vaccines:[ 
        {
            vaccineId: "1",
            vaccineName: "Pziser",
            nb_dose: 100
        },
        {
            vaccineId: "2",
            vaccineName: "Moderna",
            nb_dose: 100
        }
    ],
    departement: [
        {
            departementid: "d1",
            departementName: "Essonne",
            vaccines:  
            [{vaccineId:"1",
            nombresDose:2,
            vaccineName: "Pziser"
            },
            {vaccineId:"5",
            nombresDose:3,
            vaccineName: "Moderna"
            }],
            totalDose:null,
            dosePercent:null
         },
        {
            departementid: "d2",
            departementName:"Paris",
            vaccines: 
            [{vaccineId:"2",
            nombresDose:0,
            vaccineName: "Pziser"
            }],
            totalDose:null,
            dosePercent:null
         },
        
    ]
    }
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



    //  TODO : Refacto this part in One function
    
    const fieldChangeGlobalVaccineCount = (path, index, value) => {
        const tempValue = {...fields}
        tempValue[path][index].nb_dose= value * 1
        console.log("tempValue : ",tempValue)
        tempValue.departement.map((item)=>{return(
            item.dosePercent=doseToPerCent(item.totalDose).toFixed(2)
            ) 
        })
            setFields(tempValue)
        return (console.log("changed"))
    }
    const fieldChangeDepartmentVaccineCount = (path, index, value) => {
        const tempValue = {...fields}
        tempValue[path][index].totalDose= value * 1
        tempValue[path][index].dosePercent= doseToPerCent(value * 1)
        console.log("tempValue : ",tempValue)
        setFields(tempValue)
        return (console.log("changed"))
    }
    const fieldChangeDepartmentVaccinePerCent = (path, index, value) => {
        const tempValue = {...fields}
        tempValue[path][index].totalDose= convertPerCentToDose(value * 1)
        tempValue[path][index].dosePercent= value * 1
        console.log("tempValue : ",tempValue)
        setFields(tempValue)
        return (console.log("changed"))
    }

    const fieldChangeDepartmentVaccineCountPerVaccineName= (path, index, subIndex, value) => {
        const tempValue = {...fields}
        console.log ("tempValue path" ,tempValue[path][index].vaccines[subIndex].nombresDose)
        tempValue[path][index].vaccines[subIndex].nombresDose = value * 1
        setFields(tempValue)
        return (console.log("changed"))
    }

    return (
        <>

        <div className="ars-form">
            <h1>ARS : Ile de France</h1>
            <div className="paper">
            <p>Saisissez le formulaire pour la semaine numéro 17</p>
            {fields.vaccines.map((field, index) => {return (
                    <VaccineDoseInput 
                        field={field}
                        fieldChangeGlobalVaccineCount={fieldChangeGlobalVaccineCount}
                        path="vaccines"
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
                    fieldChangeDepartmentVaccineCount={fieldChangeDepartmentVaccineCount}
                    fieldChangeDepartmentVaccineCountPerVaccineName={fieldChangeDepartmentVaccineCountPerVaccineName}
                    fieldChangeDepartmentVaccinePerCent={fieldChangeDepartmentVaccinePerCent}
                    path="departement"
                    index={index}
                    key={index}
                    vaccineSumGlobal={vaccineSumGlobal}
                />
            )})}

            <button>Validation</button>
            </div>
        </div>
        </>
    )
}

export default ArsForm