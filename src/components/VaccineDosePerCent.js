import React from "react"

const VaccineDoseInput = ({field, fieldChange}) => {
    console.log("field : ", field)

    return(
        <div key={field.departementid}>
               <p>Département : {field.departementid}</p>
               <label>
                   Répartition pour le département : {field.departementid} 
                   <input 
                    type="number" 
                    value={field.totalDose} 
                    onChange={(e)=>fieldChange(field.departementid, e.target.value)}/> % soit 
                <input 
                    type="number" 
                    value={field.totalDose} 
                    onChange={(e)=>fieldChange(field.departementid, e.target.value)}/> doses. 
            </label>
            {field.vaccines.map((vaccine) => {
                return (
                    <label key={vaccine.vaccineId}>
                        {vaccine.vaccineName}
                        <input 
                        type="number" 
                        value={vaccine.nombresDose} 
                        onChange={(e)=>fieldChange(vaccine.vaccineId, e.target.value)}/> doses. 
                    </label>
            )
            })}

            <p>Nombre de doses réparties XXXX</p>
        </div>
    )
}

export default VaccineDoseInput