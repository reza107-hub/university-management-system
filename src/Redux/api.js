// Or from '@reduxjs/toolkit/query/react'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/api',
    }),
    tagTypes: ['Programme', 'Department', 'user'],
    endpoints: (build) => ({
        // ----------------------------------------------------------------
        // Programme endpoint
        addProgramme: build.mutation({
            query: (data) => ({
                url: '/program/create-program',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Programme']
        }),
        getProgramme: build.query({
            query: () => ({
                url: '/program/get-all-program',
                method: 'GET',
            }),
            providesTags: ['Programme']
        }),
        deleteProgram: build.mutation({
            query: (id) => {
                return {
                    url: `/program/${id}`,
                    method: 'PATCH',
                }
            },
            invalidatesTags: ['Programme']
        }),
        // ----------------------------------------------------------------
        // department endpoint
        getDepartment: build.query({
            query: () => ({
                url: '/department',
                method: 'GET',
            }),
            providesTags: ['Department']
        }),

        addDepartment: build.mutation({
            query: (data) => ({
                url: '/department',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Department']
        }),
        // ----------------------------------------------------------------
        // user endpoints
        getPresentUserWithAdditionalInfo: build.query({
            query: (email) => ({
                url: `/userAdditionalInfo/${email}`,
                method: 'GET',
            }),
        }),
    }),
})

// providesTags: ['user']
export const { useAddProgrammeMutation, useGetProgrammeQuery, useDeleteProgramMutation, useAddDepartmentMutation, useGetDepartmentQuery, useGetPresentUserWithAdditionalInfoQuery } = baseApi