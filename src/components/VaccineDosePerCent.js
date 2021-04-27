import React from "react"

//  TODO: - ADD per cent mecanism
//          - ADD check vaccine sum > totalDose

const VaccineDoseInput = ({field, 
    fieldChangeDepartmentVaccineCount, 
    path, 
    index, 
    fieldChangeDepartmentVaccineCountPerVaccineName, 
    fieldChangeDepartmentVaccinePerCent}) => {


        
        const vaccineSumPerDepartment =(field)=> {
        return field.vaccines.reduce((prev, cur)=> {return prev + cur.nombresDose},0)
    }

    console.log("field : ",field )
    return(
        <div>
               <p>Département : {field.departementName}</p><br/>
               <label>
                   Répartition pour le département : {field.departementName} 
                   <input 
                    type="number" 
                    value={field.dosePercent || 0} 
                    onChange={(e)=>fieldChangeDepartmentVaccinePerCent(path, index, (e.target.value))}
                    /> % soit 
                <input 
                    type="number" 
                    value={field.totalDose || 0} 
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

            <p>Nombre de doses réparties sur ce département {vaccineSumPerDepartment(field)}</p>
        </div>
    )
}

export default VaccineDoseInput