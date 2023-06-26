import { Router } from 'express'
import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from 'openai'
import { OpenAICreateImageRequest, OpenAICompleteRequest } from '../modules/openAI'
dotenv.config()
const router = Router()

const openAIConfig = new Configuration({
    apiKey:process.env.OPENAI_KEY
})
const openai = new OpenAIApi(openAIConfig)
router.post('/createImage',async(req,res) => {
    const { prompt }:OpenAICreateImageRequest = req.body 

    try {
        const openAIRes = await openai.createImage({
            prompt,
            n:1,
            size:'1024x1024',
            response_format:'url'
        })
        const img = openAIRes.data.data[0].url
        res.status(200).json({data:img})
        // res.status(200).json({prompt})
    } catch(e) {
        // console.log(e)
        res.status(500).json({error:'openAI發生錯誤',e})
    }

    // res.status(200).json({openAIRes})
})

router.post('/complete',async(req, res) => {
    const { prompt }:OpenAICompleteRequest = req.body
    try{
        const chatCompletion = await openai.createChatCompletion({
            model:"gpt-3.5-turbo",
            messages:[
                {role:"user",content:prompt}
            ]
        })
        res.status(200).json({message:chatCompletion.data.choices[0].message})
    }catch(e){
        res.status(500).json({error:e})
    }
})
export default router