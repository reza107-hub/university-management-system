import { baseApi } from "../../api";

const facultyApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        // getUserIsAdmin: build.query({
        //     query: (email) => ({
        //         url: `/admin/${email}`,
        //         method: 'GET',
        //     }),
        //     providesTags: ['user', 'admin', 'admin-list']
        // }),
        createFaculty: build.mutation({
            query: (body) => ({
                url: `/faculty/create-faculty`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['user', 'admin','faculty', 'admin-list']
        }),
        // faculty list get
        getFacultyList: build.query({
            query: (params) => ({
                url: `/faculty/faculty-list`,
                method: 'GET',
                params
            }),
            providesTags: ['admin-list', 'user','faculty', 'admin']
        }),
        //  faculty delete
        deleteFaculty: build.mutation({
            query: (body) => ({
                url: `/faculty/delete-faculty`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['admin-list', 'user', 'admin','faculty']
        }),
    })
})

export const { useCreateFacultyMutation,useGetFacultyListQuery,useDeleteFacultyMutation} = facultyApi