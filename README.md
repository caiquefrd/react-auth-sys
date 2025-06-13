# 🛡️ Sistema de Autenticação com React + TypeScript

Este é um projeto simples de autenticação de usuários utilizando **React Router**, **TypeScript** e o conceito de **lifting state up** para controle de login.

## 📁 Estrutura do Projeto

```
src/
├── App.tsx
├── index.tsx
├── styles.css
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
└── routes/
    └── ProtectedRoute.tsx
```

---

## 🚀 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/caiquefrd/react-auth-sys.git
cd react-auth-sys
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o TypeScript

Crie o arquivo `tsconfig.json` com:

```bash
npx tsc --init
```

Ou copie este conteúdo:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"]
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

---

### 4. Inicie o servidor de desenvolvimento

```bash
npm start
```
---

## 🧪 Funcionalidades

* Página de **login** com validação simples
* Rota **protegida** (`/dashboard`)
* **Persistência** de login com `localStorage`
* **Logout** com limpeza de estado

---

## ✅ Tecnologias Usadas

* React
* TypeScript
* React Router DOM
* HTML/CSS

---

## 💡 Observações

* Este projeto não se conecta com um backend real.
* O usuário é simulado apenas com `email` e `localStorage`.

---
