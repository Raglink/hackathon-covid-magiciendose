import React, {useState} from "react"
import "./main.css"

import VaccineDosePerCenter from "../../components/VaccineDosePerCenter"
import dataStructuredepartment from "../../mock/dataStructuredepartment"

const DdForm = () => {

    const [fields, setFields] = useState(dataStructuredepartment)

    const handleChange =  (fieldIndex ,vaccineIndex, dosesIndex, value)=>{
        value = value * 1
        const tempValue = [...fields]
        tempValue[fieldIndex].vaccines[vaccineIndex].nbDoses[dosesIndex] = value
        tempValue[fieldIndex].vaccines[vaccineIndex].sumDoses = tempValue[fieldIndex].vaccines[vaccineIndex].nbDoses.reduce((a,b)=> {return a +b})
        setFields(tempValue)
    }

    const displayWarning = (sumDoses, boxSize) =>{
        if(sumDoses % boxSize === 0){
            return
        }
        let vaccineToAdd = 0
        let vaccineToRemove = 0

        do {
            vaccineToAdd ++
        } while ((sumDoses + vaccineToAdd) % boxSize !== 0)

        do {
            vaccineToRemove ++
        } while ((sumDoses - vaccineToRemove) % boxSize !== 0)
        return <p className="warning">Merci de saisir un multiple de {boxSize} pour faire une boite complète : ajoutez {vaccineToAdd} dose(s) ou enlevez {vaccineToRemove} dose(s)</p>
    }

    return (
        <div className="dd-form">
            <h1>Essonne</h1>
            <div className="paper">
                <p>Saisissez le formulaire pour la semaine numéro 17</p>
                <p>Répartition des 500 doses Pfizer et 400 doses Moderna</p>
                {fields.map((field, fieldIndex) =>{
                    return(
                        <div key={fieldIndex}>
                            <h2>{field.name}</h2>
                            {field.vaccines.map((vaccine, vaccineIndex)=> {
                                return (
                                    <div key={vaccineIndex}>
                                        {vaccine.nbDoses.map((doses, dosesIndex)=> {
                                            return(
                                                <VaccineDosePerCenter 
                                                    key={dosesIndex}
                                                    handleChange={handleChange}
                                                    doses={doses}
                                                    dosesIndex={dosesIndex}
                                                    fieldIndex={fieldIndex}
                                                    vaccineIndex={vaccineIndex}
                                                    vaccine={vaccine}
                                                />
                                            )
                                        })}
                                        {displayWarning(vaccine.sumDoses, vaccine.boxSize)}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <button>Validation</button>
            </div>
        </div>
    )
}

export default DdForm 