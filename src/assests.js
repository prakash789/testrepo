import moment from 'moment';

export const data = {
   
        header: ["","Male", "Female", "Total"],
        // left: ["NEW REG","OPD", "IPD", "ICU", "OT", "E/R", "DISCHARGED", "EXPIRED", "NEW BORN",],
        // other: ["", "",""]
        body:[{title:"NEW REG",male:"20",female:"50",total:"70"},
        {title:"OPD",male:"20",female:"50",total:"70"},
        {title:"IPD",male:"20",female:"50",total:"70"},
        {title:"ICU",male:"50",female:"50",total:"70"},
        {title:"OT",male:"20",female:"50",total:"70"},
        {title:"E/R",male:"20",female:"50",total:"70"},
        {title:"DISCHARGED",male:"20",female:"50",total:"70"},
        {title:"EXPIRED",male:"20",female:"50",total:"70"},
        {title:"NEW BORN",male:"20",female:"50",total:"70"},
        

]
    
}

export const hospitalDepttData=[
    {title:"ADMIN",total:"58"},
    {title:"DOCTORS",total:"57"},
    {title:"NURSES",total:"75"},
    {title:"PATH LAB",total:"5"},
    {title:"RADIOLOGY",total:"75"},
    {title:"PHARMACY",total:"57"},
    {title:"FRONT DESK",total:"57"},
    {title:"RESCRVED OFFICERS",total:"75"}
]

export const hospitalOpdData = [
    {doc:"sudhir",deptt:"cardiologist",appont:"45",viewed:"86"},
    {doc:"sudhir",deptt:"cardiologist",appont:"45",viewed:"86"},
    {doc:"sudhir",deptt:"cardiologist",appont:"45",viewed:"86"},
    {doc:"sudhir",deptt:"cardiologist",appont:"45",viewed:"86"},
    {doc:"sudhir",deptt:"cardiologist",appont:"45",viewed:"86"},
]
export const hospitalIpdData = [
    {doc:"sudhir",deptt:"cardiologist",ipdward:"45",icu:"86",ot:"5",er:"7",other:"0"},
    {doc:"sudhir",deptt:"cardiologist",ipdward:"45",icu:"86",ot:"5",er:"7",other:"0"},
    {doc:"sudhir",deptt:"cardiologist",ipdward:"45",icu:"86",ot:"5",er:"7",other:"0"},
    {doc:"sudhir",deptt:"cardiologist",ipdward:"45",icu:"86",ot:"5",er:"7",other:"0"},
    {doc:"sudhir",deptt:"cardiologist",ipdward:"45",icu:"86",ot:"5",er:"7",other:"0"},
]

export const hospitalTable = [
    {
        header: ["State", "City", "Hospital", "Hospital Id", "Subscription Type", "Status"],
        left: ["NEW REG","OPD", "IPD", "ICU", "OT", ],
        other: ["", "","","",""]
    }
]

export const outstanding = 
    {
        total: 123456.00,
        opd: 50000,
        ipd: 50000,
        icu: 50000
    }

export const tabsData = ["Daily","Weekly", "Monthly", "Quarterly", "Yearly"];

export const graphFulldata = [
    {
        xaxis:  {
            currentDate : moment().format("DD/MM/YYYY"),
           oneDayBefore: moment().subtract(1, 'days').format("DD/MM/YYYY"),
           twoDayBefore: moment().subtract(2, 'days').format("DD/MM/YYYY"),
           threeDayBefore: moment().subtract(3, 'days').format("DD/MM/YYYY"),
           fourDayBefore: moment().subtract(4, 'days').format("DD/MM/YYYY"),
           fiveDayBefore: moment().subtract(5, 'days').format("DD/MM/YYYY"),
           sixDayBefore: moment().subtract(6, 'days').format("DD/MM/YYYY"),
       },
       yaxis: [15000, 20000, 25000, 20000, 18000, 28000, 32000, 24000],
       label: ["Daily", "Opd"],
       type: ["bar", "line"],
       
    }
]


export const arr1 = [{gender:'Male',opd:'1', ipd:"2"}, { gender:'Female',opd:'2', ipd:"6" }, { gender:'Other',opd:'1', ipd:"7" }];
export const arr2 = ["opd","ipd"];


// arr1.map((arr,index1) => {
// 	arr2.map((as,index2) => {
// 		if(arr1[index1].gender == arr.gender){
// 			console.log(arr1[index1][as])
// 		}
// 	})
// })


export const columnData = [
    {
        state: "delhi",
        city: "uttam nagar",
        name: "tarak hospital",
        id : "1",
        subscriptionType: "premium",
        status: "onboard"
    },
    {
        state: "uttrakhand",
        city: "dehradun",
        name: "city heart hospital",
        id : "2",
        subscriptionType: "free",
        status: "onboard"
    }
    ,
    {
        state: "mumbai",
        city: "maharastra",
        name: "pune hospital",
        id : "3",
        subscriptionType: "premium",
        status: "onboard"
    }
    ,
    {
        state: "amritsar",
        city: "amritsar",
        name: "amritsar hospital",
        id : "4",
        subscriptionType: "free",
        status: "pending"
    }
    ,
    {
        state: "up",
        city: "lucknow",
        name: "lucknow hospital",
        id : "5",
        subscriptionType: "premium",
        status: "onboard"
    }
    ,
    {
        state: "punjab",
        city: "chandigarh",
        name: "chandigarh hospital",
        id : "6",
        subscriptionType: "premium",
        status: "onboard"
    }
]

export const header = ["state", "city", "hospital", "hospital id", "subscription type", "status"]


export const OPDConsultHeader = ["DATE", "TIME", "DOCTOR", "DEPTT.", "APPOINTMENT ID", "STATUS","REVISIT DATE"]
export const onboardingStatusHeader = ["STATE", "CITY", "HOSPITAL", "HOSPITAL ID", "SUBSCRIPTION TIME", "STATUS"]
export const mrStatusHeader = ["STATE", "CITY", "COMPANY", " NAME", "STATUS"]


export const OPDConsultData = [
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
    {
        date: "10/07/2022",
        time: "12:30 pm",
        doctor: "Dr.sudhir",
        dept : "Neurology",
        appointmentId: "21A25BCF",
        status: "STATUS",
        revist:"21/12/2030"
    },
   
   
    
    
    
    

]