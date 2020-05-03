import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export default async function email(req: NextApiRequest, res: NextApiResponse) {
  try {
    const body = req.body
    const request = {
      name: `${body.first_name}${body.last_name ? ' ' + body.last_name : ''}`,
      email: body.email || 'fake@email.com',
      subject: `Formulario de contacto de ${body.first_name}${
        body.last_name ? ' ' + body.last_name : ''
      }.`,
      message: `Teléfono: ${body.tel}
      Mensaje: ${body.message}`,
      replyTo: '@',
      accessKey: 'db07dd90-0e7a-49a4-bffe-8a62db8f18a8',
    }

    console.log(request)
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
