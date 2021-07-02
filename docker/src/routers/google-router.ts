import { googleResponse } from "../data/google"
import { getRamdomWaitTime } from "../utils/utils"

export const googleRouter = (req: any, res: any) => {
    setTimeout(() => {
        res.json(googleResponse())
    }, getRamdomWaitTime())
}