import { baseApi } from "../../api";

const admissionApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createAdmissionRequest: build.mutation({
            query: (body) => ({
                url: `/admission-request`,
                method: 'POST',
                body
            }),
            invalidatesTags: ['admission']
        }),
        getAdmissionRequest: build.query({
            query: (email) => {
                const params = new URLSearchParams()
                if (email) {
                    params.append('email', email)
                }
                return {
                    url: `/admission-request`,
                    method: 'GET',
                    params,
                }
            },
            providesTags: ['admission']
        }),
    })
})


export const { useCreateAdmissionRequestMutation, useGetAdmissionRequestQuery } = admissionApi