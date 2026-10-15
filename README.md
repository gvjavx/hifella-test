# hifella-test

Projek web aplikasi full-stack menggunakan **TanStack Start** (React + Nitro), **TanStack Router**, **Tailwind CSS**, dan **Shadcn UI**.

## Struktur Folder

```text
src/
├── components/ui/       # Koleksi komponen Shadcn UI (button, dialog, dll)
├── config/              # Konfigurasi global situs (site.ts)
├── hooks/               # Custom React hooks (e.g. use-mobile.tsx)
├── lib/                 # Utility fungsi & error reporting (utils.ts, error-capture.ts)
├── routes/              # File-based routing TanStack Router (__root.tsx, index.tsx)
├── test/                # Konfigurasi & file unit testing (Vitest)
├── router.tsx           # Setup TanStack Router
├── server.ts            # Entry point SSR server (Nitro)
├── start.ts             # Entry point TanStack Start client/server
└── styles.css           # Styling global & Tailwind directives
```

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) + [Vite](https://vite.dev) + [Nitro](https://unjs.io/nitro)
- **Routing**: [TanStack Router](https://tanstack.com/router) (File-based routing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) + [Shadcn UI](https://ui.shadcn.com)
- **State/Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **Testing**: [Vitest](https://vitest.dev) + [Testing Library](https://testing-library.com)
- **Language**: TypeScript

## Perintah Development

Gunakan Paket Manager pilihan Anda (`bun`, `npm`, `pnpm`, atau `yarn`):

```bash
# Menjalankan development server
bun dev          # atau npm run dev

# Build aplikasi untuk production
bun build        # atau npm run build

# Preview build production
bun preview      # atau npm run preview

# Menjalankan unit testing
bun test         # atau npm run test

# Menjalankan unit testing mode watch
bun test:watch   # atau npm run test:watch

# Linting kode
bun lint         # atau npm run lint

# Format kode
bun format       # atau npm run format
```