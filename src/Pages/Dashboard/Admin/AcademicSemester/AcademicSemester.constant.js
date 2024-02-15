const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const transformedMonth = month.map((monthName) => ({
    _id: monthName,
    value: monthName,
}));

const year = new Date().getFullYear();
const date = [
    {
        _id: year,
        value: year
    }
]
export const academicSemesterContent = [
    {
        name: "Semester Name",
        type: "text",
        inputName: "name",
        id: "name",
    },
    {
        name: "Semester code",
        type: "text",
        inputName: "code",
        id: "code",
    },
    {
        name: "Year",
        id: "year",
        select: date,
    },
    {
        name: "Semester Start Month",
        id: "startMonth",
        select: transformedMonth,
    },
    {
        name: "Semester End Month",
        id: "endMonth",
        select: transformedMonth,
    },
];

export const updateAcademicSemesterContent = [
    {
        name: "Semester Name",
        type: "text",
        inputName: "name",
        id: "name",
    },
    {
        name: "Semester code",
        type: "text",
        inputName: "code",
        id: "code",
    },
    {
        name: "Year",
        id: "year",
        select: date,
    },
    {
        name: "Semester Start Month",
        id: "startMonth",
        type: "text",
        inputName: "startMonth",
    },
    {
        name: "Semester End Month",
        id: "endMonth",
        type: "text",
        inputName: "endMonth",
    },
];