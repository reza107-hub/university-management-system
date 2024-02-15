import { baseApi } from "../../api";

const userApi = baseApi.injectEndpoints({
    endpoints: build => ({
        // user list collection
        getUser: build.query({
            query: (params) => ({
                url: `/users`,
                method: 'GET',
                params
            }),
            providesTags: ['user']
        }),

        getPresentUserWithAdditionalInfo: build.query({
            query: (email) => ({
                url: `/userAdditionalInfo/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        getUserWithAdditionalInfo: build.query({
            query: (params) => ({
                url: `/userAdditionalInfo`,
                method: 'GET',
                params
            }),
            providesTags: ['user']
        }),
        contactByEmail: build.mutation({
            query: (data) => ({
                url: '/users/contact-us',
                method: 'POST',
                body: data,
            }),
        }),
    })
})

export const { useGetUserQuery, useGetPresentUserWithAdditionalInfoQuery, useGetUserWithAdditionalInfoQuery ,useContactByEmailMutation } = userApi