# NX Experience — Site Institucional

Next.js 14 + TypeScript. Fonte: **Poppins**. Cores centrais: vermelho-laranja `#F26644`, roxo `#B84E9E`, laranja `#F68D3B`.

---

## Como rodar

```bash
npm install
npm run dev
# http://localhost:3000
```

---

## Estrutura

```
src/
├── app/
│   ├── globals.css            ← variáveis de cor e fonte (Poppins)
│   ├── layout.tsx             ← layout raiz
│   ├── page.tsx               ← monta as seções
│   └── api/contact/route.ts  ← API do formulário
├── components/
│   ├── layout/   Header  Footer
│   └── sections/ HeroSection  SobreSection  EmpresasSection  ContactForm
├── lib/content.ts  ← TODO O CONTEÚDO EDITÁVEL ESTÁ AQUI
└── types/index.ts
public/
├── images/
│   ├── hero-bg.png         ← PLACEHOLDER — substitua pela imagem real
│   └── sobre-evento.png    ← PLACEHOLDER — substitua pela foto do evento
└── logos/
    ├── empresa-alpha.png   ← PLACEHOLDER — substitua pelo logo real
    ├── empresa-beta.png
    ├── empresa-gamma.png
    ├── empresa-delta.png
    ├── empresa-epsilon.png
    └── empresa-zeta.png
```

---

## Como substituir imagens

Todos os placeholders já estão conectados ao código. Basta **substituir o arquivo** mantendo o mesmo nome:

| Arquivo                         | O que colocar                    |
|---------------------------------|----------------------------------|
| `public/images/hero-bg.png`     | Foto/arte de fundo do hero       |
| `public/images/sobre-evento.png`| Foto de uma feira ou evento      |
| `public/logos/empresa-alpha.png`| Logo real da empresa Alpha       |
| `public/logos/empresa-beta.png` | Logo real da empresa Beta        |
| … (idem para as demais)         |                                  |

Para adicionar uma nova empresa, edite `src/lib/content.ts` → `COMPANIES` e adicione o logo em `/public/logos/`.

---

## Editar conteúdo (textos, links, dados)

**Arquivo único:** `src/lib/content.ts`

---

## Cores (globals.css)

| Variável CSS         | Hex       | Uso                        |
|----------------------|-----------|----------------------------|
| `--brand-primary`    | `#F26644` | Vermelho-laranja — botões  |
| `--brand-secondary`  | `#B84E9E` | Roxo — hover, cards, tags  |
| `--brand-accent`     | `#F68D3B` | Laranja — destaques        |
| `--bg-dark`          | `#1a0a20` | Fundo footer / hero base   |

---

## Configurar envio de e-mail

Edite `src/app/api/contact/route.ts` — há instruções para Nodemailer e Resend.
Copie `.env.example` → `.env.local` e preencha.
