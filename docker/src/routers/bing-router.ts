import { bingResponse } from "../data/bing"
import { getRamdomWaitTime } from "../utils/utils";

export const bingRouter = (req: any, res: any) => {
    setTimeout(() => {
        res.json(bingResponse())
    }, getRamdomWaitTime())
}