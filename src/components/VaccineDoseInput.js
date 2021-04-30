import React from "react"


const VaccineDoseInput = ({field, fieldChange, path, index}) => {
    return(
        <div>
            <label>
                1ère dose de : {field.vaccineName} 
                <input 
                    type="number" 
                    value={field.nb_dose || ""} 
                    onChange={(e)=>fieldChange("vaccinesGlobal", index, e.target.value )}
                />
            </label>
        </div>
    )
}

export default VaccineDoseInput