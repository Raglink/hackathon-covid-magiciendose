import React from "react"


const VaccineDosePerCenter = ({field, fieldChangeGlobalVaccineCount, path, index}) => {
    console.log('field center : ', field)
    console.log('index center : ', index)
    //  NEED TO BE AUTOMATIZED
       return(
        <div>
            <h2>{field.center.name}</h2>
            <label>Répartition du {field.center.name}<input/></label>
            {field.center.vaccines.map((vaccines, index)=>{
                return (

                    <label><input type="number"/></label>
                )
            })}
        </div>
    )
}

export default VaccineDosePerCenter