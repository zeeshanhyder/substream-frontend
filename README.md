<img width="1792" alt="Screenshot 2025-06-16 at 10 25 53 AM" src="https://github.com/user-attachments/assets/037e5601-0f9d-4298-ac2c-552ee6dc675c" />

# Substream

Substream is a comprehensive locally hosted and managed full streaming platform, designed to process, organize, and stream your media library. This frontend provides a user-friendly interface to interact with the media managed by the Substream backend.

## Demo
[Substream working demo](https://jumpshare.com/s/TyEK7qb2jhaKC7AYm3Yg)

## UI

### Profile selection page
<img width="1404" alt="Screenshot 2025-06-16 at 10 21 11 AM" src="https://github.com/user-attachments/assets/b5e9872c-02e4-4f53-8b6f-5916f90aee85" />

### Home Experience
<img width="1791" alt="Screenshot 2025-06-16 at 10 22 46 AM" src="https://github.com/user-attachments/assets/3b429cd6-425b-4d1b-9434-e02f5e688cb8" />

### Recently Watched Experience
<img width="1792" alt="Screenshot 2025-06-16 at 10 24 01 AM" src="https://github.com/user-attachments/assets/264ddd2b-dba9-4579-a6a6-9083a45eca32" />
<img width="1791" alt="Screenshot 2025-06-16 at 10 26 18 AM" src="https://github.com/user-attachments/assets/55a52ec8-d816-41b6-90eb-7653c62c6c42" />


### Media Details Experience
<img width="1792" alt="Screenshot 2025-06-16 at 10 26 56 AM" src="https://github.com/user-attachments/assets/33650f1f-32f9-4902-9893-65920dfd755e" />

### Media Player Experience
<img width="1781" alt="Screenshot 2025-06-16 at 10 29 57 AM" src="https://github.com/user-attachments/assets/c5cc65d7-3b3f-4145-8d16-8db67eb90ffd" />

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

Follow these steps to get the Substream frontend up and running on your local machine:

1.  **Clone the repository (if you haven't already):**

    ```bash
    git clone <your-repository-url>
    cd substream-frontend
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
