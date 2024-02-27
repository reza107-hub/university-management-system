import { baseApi } from '../../api'

const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        payment: build.mutation({
            query: (body) => ({
                url: `/admission-request/payment`,
                method: 'POST',
                body,
            }),
        }),

    }),
})

export const { usePaymentMutation } = paymentApi
