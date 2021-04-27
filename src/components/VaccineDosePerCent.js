import React from "react"

const VaccineDoseInput = ({field, 
    fieldChangeDepartmentVaccineCount, 
    path, 
    index, 
    fieldChangeDepartmentVaccineCountPerVaccineName, 
    fieldChangeDepartmentVaccinePerCent,
    }) => {
        
        const vaccineSumPerDepartment =(field)=> {
        return field.vaccines.reduce((prev, cur)=> {return prev + cur.nombresDose},0)
    }

    return(
        <div>
               <h3>Département : {field.departementName}</h3><br/>
               <label>
                   Répartition pour le département {field.departementName}  :
                   <input 
                    type="number" 
                    value={field.dosePercent || ""} 
                    onChange={(e)=>fieldChangeDepartmentVaccinePerCent(path, index, (e.target.value))}
                    /> % soit 
                <input 
                    type="number" 
                    value={field.totalDose || ""} 
                    onChange={(e)=>fieldChangeDepartmentVaccineCount(path, index, e.target.value)}/> doses. 
            </label>
            <br/>
            {field.vaccines.map((vaccine, subIndex) => {
                return (
                    <div key={subIndex}>
                    <label >
                        {vaccine.vaccineName}
                        <input 
                        type="number" 
                        value={vaccine.nombresDose} 
                        onChange={(e)=>fieldChangeDepartmentVaccineCountPerVaccineName(path, index, subIndex  , e.target.value)}/> doses. 
                    </label><br/>
                    </div>
            )
            })}

            <p>Actuellement vous avez réparti {vaccineSumPerDepartment(field)} doses</p>
            <hr/>
        </div>
    )
}

export default VaccineDoseInput