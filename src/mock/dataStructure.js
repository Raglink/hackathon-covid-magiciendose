const dataStructure = {
    vaccines:[ 
        {
            vaccineId: "1",
            vaccineName: "Pziser",
            nb_dose: null
        },
        {
            vaccineId: "2",
            vaccineName: "Moderna",
            nb_dose: null
        }
    ],
    departement: [
        {
            departementid: "d1",
            departementName: "Essonne",
            vaccines:  
            [{vaccineId:"1",
            nombresDose:null,
            vaccineName: "Pziser"
            },
            {vaccineId:"5",
            nombresDose:null,
            vaccineName: "Moderna"
            }],
            totalDose:null,
            dosePercent:null
        },
        {
            departementid: "d2",
            departementName:"Paris",
            vaccines: 
            [{vaccineId:"2",
            nombresDose:null,
            vaccineName: "Pziser"
            }],
            totalDose:null,
            dosePercent:null
        },
    ]
}
export default dataStructure