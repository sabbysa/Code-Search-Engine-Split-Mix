import { yahooResponse } from "../data/yahoo"
import { getRamdomWaitTime } from "../utils/utils"

export const yahooRouter = (req: any, res: any) => {
    setTimeout(() => {
        res.json(yahooResponse())
    }, getRamdomWaitTime())
}