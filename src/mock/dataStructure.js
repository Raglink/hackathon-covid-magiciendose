const dataStructure = {
    vaccines:[ 
        {
            vaccineId: "1",
            vaccineName: "Pziser",
            nb_dose: 0
        },
        {
            vaccineId: "2",
            vaccineName: "Moderna",
            nb_dose: 0
        }
    ],
    departement: [
        {
            departementid: "d1",
            departementName: "Essonne",
            vaccines:  
            [{vaccineId:"1",
            nombresDose:0,
            vaccineName: "Pziser"
            },
            {vaccineId:"5",
            nombresDose:0,
            vaccineName: "Moderna"
            }],
            totalDose:0,
            dosePercent:0
        },
        {
            departementid: "d2",
            departementName:"Paris",
            vaccines: 
            [{vaccineId:"2",
            nombresDose:0,
            vaccineName: "Pziser"
            }],
            totalDose:0,
            dosePercent:0
        },
    ]
}
export default dataStructure