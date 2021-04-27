import React from "react"


const VaccineDoseInput = ({field, fieldChangeGlobalVaccineCount, path, index}) => {
       return(
        <div>
            <label>
                1ère dose de {field.vaccineName} 
                <input 
                    type="number" 
                    value={field.nb_dose || 0} 
                    onChange={(e)=>fieldChangeGlobalVaccineCount(path, index, e.target.value )}/>
            </label>
            
        </div>
    )
}

export default VaccineDoseInput