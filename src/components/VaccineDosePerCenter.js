import React from "react"


const VaccineDosePerCenter = ({handleChange, doses ,vaccineIndex, dosesIndex, fieldIndex, vaccine}) => {

       return(
        <>
            <label>{vaccine.name} dose {dosesIndex+1}
                <input 
                    type="number" 
                    value={doses || ""}
                    onChange={(e)=>handleChange( fieldIndex ,vaccineIndex, dosesIndex, e.target.value)}
                />
            </label>
            <br/>
        </>
    )
}

export default VaccineDosePerCenter