import React, {useState} from "react"

const VaccineDoseInput = ({field, fieldChange}) => {

    return(
        <div key={field.key}>
            <label>
                1ère dose de {field.vaccineName} 
                <input 
                    type="number" 
                    value={field.value} 
                    onChange={(e)=>fieldChange(field.index, e.target.value)}/>
            </label>
        </div>
    )
}

export default VaccineDoseInput