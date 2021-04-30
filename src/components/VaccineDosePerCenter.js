import React from "react"


const VaccineDosePerCenter = ({fieldChange, doses ,vaccineIndex, dosesIndex, fieldIndex, vaccine}) => {

       return(
        <>
        <label>{vaccine.name} dose {dosesIndex+1}
            <input 
                type="number" 
                value={doses || ""}
                onChange={(e)=>fieldChange( fieldIndex ,vaccineIndex, dosesIndex, e.target.value)}
            />
        </label>
        <br/>
        </>
    )
}

export default VaccineDosePerCenter