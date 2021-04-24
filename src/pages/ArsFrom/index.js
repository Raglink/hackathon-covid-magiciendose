import React, { useEffect, useState } from "react"
import "./main.css"
import VaccineDoseInput from "../../components/VaccineDoseInput"
import VaccineDosePerCent from "../../components/VaccineDosePerCent"

const ArsForm = () => {
    const dataStructure = {
        vaccines:[ 
        {
            vaccineId: "1",
            vaccineName: "Pziser",
            nb_dose: 1
        },
        {
            vaccineId: "2",
            vaccineName: "Moderna",
            nb_dose: 2
        },
        {
            vaccineId: "3",
            vaccineName: "Serum",
            nb_dose: null
        }
    ],
    departement: [
        {
            departementid: "d1",
            departementName: "departement 1",
            vaccines:  
            [{vaccineId:"1",
            nombresDose:2,
            vaccineName: "Moderna"
            }],
            totalDose:2
         },
        {
            departementid: "d2",
            departementName:"departement 2",
            vaccines: 
            [{vaccineId:"2",
            nombresDose:0,
            vaccineName: "Moderna"
            }],
            totalDose:""
         },
        
    ]
    }
    console.log("dataStructure ", dataStructure )
const [fields, setFields] = useState(dataStructure)
    const fieldChange = () => {
        return ("changed")
    }

    return (
        <div className="ars-form">
            <p>ARS : Ile de France</p>
            <p>Semaine numéro</p>
            {fields.vaccines.map((field) => {return (
                    <VaccineDoseInput 
                        field={field}
                        fieldChange={fieldChange}


                    />
                )}
            )}
            {fields.departement.map((field) => {return(
                <VaccineDosePerCent
                    field={field}
                    fieldChange={fieldChange}
                />
            )})}

            <button>Validation</button>
        </div>

    )
}

export default ArsForm