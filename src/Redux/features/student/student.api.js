import { baseApi } from "../../api";

const studentApi = baseApi.injectEndpoints({
    endpoints: build => ({
        createStudent: build.mutation({
            query: body => ({
                url: `/students`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['user', 'admission']
        }),
        denyStudent: build.mutation({
            query: body => ({
                url: `/students/deny-student`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['user', 'admission']
        }),
    })
})

export const { useCreateStudentMutation, useDenyStudentMutation } = studentApi