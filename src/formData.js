 const formData = {
    vaccine: [
        {
            vaccineId: "1",
            vaccineName: "Pziser"
        },
        {
            vaccineId: "2",
            vaccineName: "Moderna"
        },
        {
            vaccineId: "3",
            vaccineName: "test Toto"
        }
    ],
    departement: [
        {
            departementid: "d1",
            vaccine: 
            [{vaccineId:"1",
            nombresDose:2,
            }],
            totalDose:2
         },
        {
            departementid: "d2",
            vaccine: 
            [{vaccineId:"2",
            nombresDose:null,
            }],
            totalDose:null
         },
        
    ]
}