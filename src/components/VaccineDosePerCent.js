import React from "react"

const VaccineDoseInput = ({field, index, fieldChange }) => {

    const vaccineSumPerDepartment =(field)=> {
        return field.vaccines.reduce((prev, cur)=> {return prev + cur.nombresDose||""},0)
    }

    return(
        <div>
            <h3>Département : {field.departementName}</h3>
            <br/>
            <label>
                Répartition pour le département {field.departementName}  :
                <input 
                    type="number" 
                    value={field.dosePercent || ""} 
                    onChange={(e)=>fieldChange("departementPerCent", index, (e.target.value))}
                /> % soit 

                <input 
                    type="number" 
                    value={field.totalDose || ""} 
                    onChange={(e)=>fieldChange("departementPerDose", index, e.target.value)}
                /> doses. 

            </label>
            <br/>
            {field.vaccines.map((vaccine, subIndex) => {
                return (
                    <div key={subIndex}>
                        <label >
                            {vaccine.vaccineName}
                            <input 
                                type="number" 
                                value={vaccine.nombresDose||""} 
                                onChange={(e)=>fieldChange("departementPerDosePerName", index, e.target.value, subIndex)}
                            /> doses. 
                        </label>
                        <br/>
                    </div>
                )
            })}

            <p>Actuellement vous avez réparti {vaccineSumPerDepartment(field)} doses</p>
            <hr/>
        </div>
    )
}

export default VaccineDoseInput