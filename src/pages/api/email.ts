import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export default async function email(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body
    const request = {
      name: `${body.first_name}${body.lastName ? ' ' + body.lastName : ''}`,
      email: body.email,
      subject: 'Consulta de peluquería.',
      message: `Telefono: ${body.tel}
      Mensaje: ${body.message}`,
      replyTo: '@',
      accessKey: '5922f3d4-8a81-4f84-b94e-f19a300cd741',
    }

    const response = await fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: JSON.stringify(request),
      headers: { 'Content-Type': 'application/json' },
    })

    const json = await response.json()

    if (json.success) {
      res.status(204).end()
    } else {
      console.log(json)
      res.status(400).end()
    }
  } catch (error) {
    console.log(error)
    res.status(500).end()
  }
}
