"use server"

import { RegistrationSchema } from "@/schemas"

import * as z from "zod"


export const register = async (values: z.infer<typeof RegistrationSchema>) => {
    const validatedFields = RegistrationSchema.safeParse(values)

    if(!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    return {success: "Success! Registration completed"}
}
