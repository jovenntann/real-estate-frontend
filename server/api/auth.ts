import { z } from 'zod';

const FetchResponse = z.object({
    data: z.object({
        refresh: z.string(),
        access: z.string(),
    }).optional(),
    detail: z.string().optional(),
});

export default defineEventHandler(async (event: any) => {
    console.log("Event received: ", event);
    const uri = `http://stg.pickrmusic.com/api/token/`
    const body = {
        username: "joven+staging@gmail.com",
        password: "Pass@12345"
    }
    const response = await $fetch(uri, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    console.log("Response received: ", response);
})