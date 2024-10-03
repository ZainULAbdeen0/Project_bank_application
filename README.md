<div align="center">
  <br />
    <a href="https://horizon-bank-eight.vercel.app/" target="_blank">
      <img src="public/assets/project-banner.png" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  </div>

  <h3 align="center">Horizon - A Fintech Bank Application</h3>

   <div align="center">
     Built with state-of-the-art technologies to provide a seamless banking experience. Connect multiple bank accounts, transfer funds, and manage finances in one place.
    </div>
</div>

## 🔗 Live Demo

Check out the [live application here](https://horizon-bank-eight.vercel.app/).

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code Snippets to Copy](#snippets)
6. 🔗 [Assets](#links)

## <a name="introduction">🤖 Introduction</a>

Horizon is a financial SaaS platform that connects to multiple bank accounts, displays real-time transactions, allows users to transfer money between accounts, and helps manage finances. The platform is built using **Next.js**, **Appwrite**, **Plaid**, **Dwolla**, and other cutting-edge technologies.

## <a name="tech-stack">⚙️ Tech Stack</a>

<div>
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextjs" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
  <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
  <img src="https://img.shields.io/badge/-Plaid-black?style=for-the-badge&logoColor=white&logo=plaid&color=5E5E5E" alt="plaid" />
  <img src="https://img.shields.io/badge/-Dwolla-black?style=for-the-badge&logoColor=white&logo=dwolla&color=FF8C00" alt="dwolla" />
  <img src="https://img.shields.io/badge/-React_Hook_Form-black?style=for-the-badge&logoColor=white&logo=reacthookform&color=EC5990" alt="reacthookform" />
  <img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logoColor=white&logo=zod&color=FF6347" alt="zod" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-Chart_JS-black?style=for-the-badge&logoColor=white&logo=chartdotjs&color=FF6384" alt="chartjs" />
  <img src="https://img.shields.io/badge/-ShadCN-black?style=for-the-badge&logoColor=white&logo=shadcn&color=000000" alt="shadcn" />
</div>

## <a name="features">🔋 Features</a>

👉 **Authentication**: Secure SSR authentication with proper validation and authorization.

👉 **Connect Banks**: Integrates with Plaid to link multiple bank accounts.

👉 **Home Page**: Displays an overview of user account balances, recent transactions, and spending by category.

👉 **My Banks**: Shows a list of all connected banks with account balances and details.

👉 **Transaction History**: Includes pagination and filtering for easy viewing.

👉 **Funds Transfer**: Transfer funds securely between accounts using Dwolla.

👉 **Real-time Updates**: Automatically updates all relevant pages when bank accounts are linked.

👉 **Responsiveness**: Optimized for seamless use across desktop, tablet, and mobile devices.

## <a name="quick-start">🤸 Quick Start</a>

To get started with the project locally, follow these steps:

**Prerequisites:**
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository:**

```bash
git clone https://github.com/ZainULAbdeen0/Project_bank_application.git
cd Project_bank_application

```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox

```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Appwrite](https://appwrite.io/), [Plaid](https://plaid.com/) and [Dwolla](https://www.dwolla.com/)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 📦 Build and Deployment

To build and deploy your application, use the following commands:

1. **Build the application**:

    ```bash
    npm run build
    ```

2. **Start the production server**:

    ```bash
    npm start
    ```

## 👥 Contributing

We welcome contributions! Please fork this repository, create a new branch, and submit a pull request. Don't forget to star the repository if you find it useful!

## 📧 Contact

If you have any questions or feedback, feel free to reach out to us at [mujtabazain183@gmail.com](mailto:mujtabazain183@gmail.com).

---

Made with ❤️ by [Zain Ul Abdeen](https://github.com/ZainULAbdeen0)