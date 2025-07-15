import { apiSlice } from "../api/apiSlice"
const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        adminLogin: builder.mutation({
            query: (data) => ({
                url: "auth/register-user",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled
                } catch (error) {

                }
            }
        }),

    })
})

export const { useAdminLoginMutation } = authApi