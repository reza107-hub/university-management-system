import { baseApi } from "../../api";

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        // user list collection
        getUser: build.query({
            query: () => ({
                url: `/users`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        createUser: build.mutation({
            query: (body) => ({
                url: `/users`,
                method: 'POST',
                body
            }),
            providesTags: ['user']
        }),
        getPresentUser: build.query({
            query: (email) => ({
                url: `/users/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),

        getPresentUserWithAdditionalInfo: build.query({
            query: (email) => ({
                url: `/userAdditionalInfo/${email}`,
                method: 'GET',
            }),
            providesTags: ['user', 'admin-list', 'admin', 'faculty']
        }),

        createUserAdditionalInfo: build.mutation({
            query: (body) => ({
                url: `/userAdditionalInfo/create`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['user']
        }),
        getUserWithAdditionalInfo: build.query({
            query: () => ({
                url: `/userAdditionalInfo`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        UpdateUserWithAdditionalInfo: build.mutation({
            query: ({ id, data }) => ({
                url: `/userAdditionalInfo/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['user', 'admin-list', 'admin', 'faculty']
        }),
    })
})

export const { useGetUserQuery, useGetPresentUserWithAdditionalInfoQuery, useGetUserWithAdditionalInfoQuery, useGetPresentUserQuery, useCreateUserAdditionalInfoMutation, useCreateUserMutation, useUpdateUserWithAdditionalInfoMutation } = userApi