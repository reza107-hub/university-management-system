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
        // admin list get
        getAdminList: build.query({
            query: () => ({
                url: `/admin/admin-list`,
                method: 'GET',
            }),
            providesTags: ['admin-list', 'user']
        }),
        // admin delete
        deleteAnAdmin: build.mutation({
            query: (body) => ({
                url: `/admin/delete`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['admin-list', 'user']
        }),
        getPresentUserWithAdditionalInfo: build.query({
            query: (email) => ({
                url: `/userAdditionalInfo/${email}`,
                method: 'GET',
            }),
            providesTags: ['user']
        }),
    })
})

export const { useGetUserQuery, useGetAdminListQuery, useDeleteAnAdminMutation, useGetPresentUserWithAdditionalInfoQuery } = userApi