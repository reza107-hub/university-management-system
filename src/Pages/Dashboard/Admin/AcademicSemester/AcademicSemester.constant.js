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

const date = new Date().getFullYear();
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
        select: [date],
    },
    {
        name: "Semester Start Month",
        id: "startMonth",
        select: month,
    },
    {
        name: "Semester End Month",
        id: "endMonth",
        select: month,
    },
];