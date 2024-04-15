import { baseApi } from "../../api";

const attendanceApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAttendance: build.mutation({
            query: body => ({
                url: `/attendance/create-attendance`,
                method: 'POST',
                body,
            })
        })
    })
})

export const { useCreateAttendanceMutation } = attendanceApi