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
        getAllStudents: build.query({
            query: (params) => ({
                url: `/students`,
                method: 'GET',
                params
            }),
            providesTags: ['user', 'admission']
        })
    })
})

export const { useCreateStudentMutation, useDenyStudentMutation, useGetAllStudentsQuery } = studentApi