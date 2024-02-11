import { baseApi } from "../../api"

const departmentApi = baseApi.injectEndpoints({
    endpoints: build => ({
        getDepartment: build.query({
            query: (params) => ({
                url: '/department',
                method: 'GET',
                params
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

        deleteDepartment: build.mutation({
            query: (id) => ({
                url: `/department/delete-dept/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Department']
        }),
    })
})

export const { useAddDepartmentMutation, useGetDepartmentQuery, useDeleteDepartmentMutation } = departmentApi