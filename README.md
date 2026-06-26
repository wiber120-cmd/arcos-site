# ACOS - Associação Coração Solidário

Site institucional em React + Vite para a ACOS, com visual responsivo, logo oficial, imagens locais, WhatsApp, Pix, Google Maps e formulário preparado para envio ao Google Sheets via Google Apps Script.

## Rodar localmente

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Prévia do build:

```bash
npm run preview
```

## Publicar na Vercel

1. Envie esta pasta para um repositório no GitHub, GitLab ou Bitbucket.
2. Acesse a Vercel e clique em `Add New > Project`.
3. Importe o repositório.
4. A Vercel deve detectar o framework `Vite` automaticamente.
5. Confirme:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Em `Environment Variables`, adicione:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_ID_DO_WEB_APP/exec
```

7. Clique em `Deploy`.

O arquivo `vercel.json` já está incluído com as configurações de build e roteamento.

## Configurar o formulário no Google Sheets

1. Crie uma planilha no Google Sheets.
2. Acesse `Extensões > Apps Script`.
3. Cole o conteúdo de `google-apps-script/Code.gs`.
4. Salve o projeto.
5. Clique em `Implantar > Nova implantação`.
6. Escolha `Aplicativo da web`.
7. Em `Executar como`, selecione você mesmo.
8. Em `Quem pode acessar`, selecione `Qualquer pessoa`.
9. Publique e autorize o acesso quando o Google solicitar.
10. Copie a URL do Web App.
11. Cole a URL no `.env` local e também nas variáveis de ambiente da Vercel.

## Arquivos importantes

- `src/main.jsx`: conteúdo, seções, formulário, WhatsApp, Pix e Google Maps.
- `src/styles.css`: identidade visual, responsividade e animações.
- `public/logo-acos.webp`: logo principal da ACOS.
- `public/images/`: imagens institucionais locais usadas no site.
- `google-apps-script/Code.gs`: script para salvar cadastros na planilha.
- `vercel.json`: configuração pronta para deploy na Vercel.

## Observação sobre CORS

O formulário usa `mode: "no-cors"` para funcionar com Web Apps simples do Google Apps Script publicados para qualquer pessoa. Quando a URL estiver correta e publicada, o envio acontece, mesmo que o navegador não exponha o corpo da resposta.
