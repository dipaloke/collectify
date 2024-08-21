import { z } from "zod";

export const DeleteSingleCollection = z.object({
    id: z.string()
})
