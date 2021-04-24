import React, { useEffect, useState } from "react"
import "./main.css"
import VaccineDoseInput from "../../components/VaccineDoseInput"

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
            vaccine: 
            [{vaccineId:"1",
            nombresDose:2,
            }],
            totalDose:2
         },
        {
            departementid: "d2",
            vaccine: 
            [{vaccineId:"2",
            nombresDose:null,
            }],
            totalDose:null
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
            {fields.vaccines.map((field)=> {return (
                    <VaccineDoseInput 
                        key={field.id}
                        field={field}
                        fieldChange={fieldChange}

                    />
                )}
            )}
            <div>
                <label>
                    1ere dose Pfizer :
                    <input type="text" />
                </label>
                <label>
                    1ere dose Moderna :
                    <input type="text" />
                </label>
            </div>
            <p>Nom du départ</p>
            <label>
                répartion département 1
                <input type="number" /> % soit
                <input type="number" />dose
            </label>
            <br /><br />
            <label>
                Pfiser 1 <input type="text" /> doses
            </label>
            <br /><br />
            <label>
                Moderna 1 <input type="text" /> doses
            </label>
            <p>Nombre de doses réparties XXXX</p>
            <button>Validation</button>
        </div>

    )
}

export default ArsForm