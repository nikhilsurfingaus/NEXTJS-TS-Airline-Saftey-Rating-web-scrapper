import {JSDOM} from 'jsdom'
import { NextApiRequest, NextApiResponse } from 'next'

const getDownloads = async(req: NextApiRequest, res: NextApiResponse) => {

    //get SLUG input
    const body = JSON.parse(req.body)
    const {input} = body

    //if spaces like air india transform to air-india

    const response = await fetch(`https://www.airlineratings.com/ratings/${input}`)
    const html = await response.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    let downloads = document.querySelector('.airline_rating')?.textContent
    downloads = downloads?.replace('Safety Rating CriteriaSafety Rating Breakdown', '')
    downloads = downloads?.replace('Safety Rating', '')

    console.log("downloads", downloads)
    
    //Send downloads back to client
    res.status(200).json({downloads})

}

export default getDownloads