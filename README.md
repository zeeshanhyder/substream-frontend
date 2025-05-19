# Substream Frontend

Substream Frontend is the frontend application for the Substream Media Processor, a comprehensive media management system designed to process, organize, and stream your media library. This frontend provides a user-friendly interface to interact with the media managed by the Substream backend.

## Tech Stack

This project is built with a modern and efficient technology stack:

- **Framework**: [Next.js](https://nextjs.org/) 15
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **UI Components**: HeroUI 2.8.0
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)

## Prerequisites

Before you begin, ensure you have the following installed and running:

1.  **Node.js**: Minimum version 22. You can download it from [nodejs.org](https://nodejs.org/).
2.  **Substream Media Processor Backend**: This frontend relies on the Substream backend for all media processing and data. Make sure it's running before starting this application.
    - Backend Repository: [https://github.com/zeeshanhyder/substream](https://github.com/zeeshanhyder/substream)

## Getting Started

Follow these steps to get the S frontend up and running on your local machine:

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone <your-repository-url>
    cd S-frontend
    ```

2.  **Install dependencies:**
    This command will install all the necessary project dependencies.

    ```bash
    npm i
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    # or
    # pnpm dev
    # or
    # bun dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
