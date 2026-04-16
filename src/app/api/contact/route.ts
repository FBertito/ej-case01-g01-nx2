import { NextRequest, NextResponse } from 'next/server'
import { FORM_SECTION } from '@/lib/content'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    
    const required = ['company', 'name', 'email', 'sector']
    for (const field of required) {
      if (!body[field] || String(body[field]).trim() === '') {
        return NextResponse.json(
          { error: `Campo obrigatório ausente: ${field}` },
          { status: 400 }
        )
      }
    }

    
    console.log('=== Nova mensagem do formulário de contato ===')
    console.log('Empresa:', body.company)
    console.log('Nome:',    body.name)
    console.log('E-mail:',  body.email)
    console.log('Telefone:', body.phone || '—')
    console.log('Setor:',   body.sector)
    console.log('Mensagem:', body.message || '—')
    console.log('Destinatário:', FORM_SECTION.recipientEmail)
    console.log('=============================================')

    
    

    
    

    return NextResponse.json({ ok: true }, { status: 200 })

  } catch (err) {
    console.error('Erro na API de contato:', err)
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
