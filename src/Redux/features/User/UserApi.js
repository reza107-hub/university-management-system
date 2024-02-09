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

        getPresentUserWithAdditionalInfo: build.query({
            query: (email) => ({
                url: `/userAdditionalInfo/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
        getUserWithAdditionalInfo: build.query({
            query: () => ({
                url: `/userAdditionalInfo`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
    })
})

export const { useGetUserQuery, useGetPresentUserWithAdditionalInfoQuery, useGetUserWithAdditionalInfoQuery } = userApi