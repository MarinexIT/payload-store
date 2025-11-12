# 🚀 Payload CMS v3 E-commerce na Vercel

Gotowy szablon sklepu e-commerce zbudowany z **Payload CMS v3**, **Next.js 15**, **Vercel Postgres** i **Vercel Blob Storage**.

## ✨ Funkcje

- ✅ Panel administracyjny (`/admin`)
- ✅ Kolekcja Produktów z cenami, zdjęciami i stockiem
- ✅ Kolekcja Kategorii
- ✅ Kolekcja Zamówień ze statusami
- ✅ System użytkowników z autoryzacją
- ✅ Vercel Blob Storage dla uploadu zdjęć
- ✅ Vercel Postgres jako baza danych
- ✅ GraphQL + REST API
- ✅ TypeScript
- ✅ Tailwind CSS

## 🎯 Deploy na Vercel (3 minuty!)

### Krok 1: Stwórz repo na GitHub

1. Skopiuj wszystkie pliki z artifacts do nowego folderu
2. Zainicjuj Git:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Stwórz repo na GitHub i push:
   ```bash
   git remote add origin https://github.com/MarinexIT/payload-store.git
   git branch -M main
   git push -u origin main
   ```

### Krok 2: Deploy na Vercel

1. Idź na [vercel.com/new](https://vercel.com/new)
2. Import projektu z GitHub
3. Framework Preset: **Next.js** (automatycznie wykryty)
4. Kliknij **Deploy**

⚠️ Pierwszy deploy się nie powiedzie - to normalne! Musimy dodać bazę danych.

### Krok 3: Dodaj Vercel Postgres

1. W dashboardzie projektu, idź do zakładki **Storage**
2. Kliknij **Create Database** → **Postgres**
3. Wybierz **Free Plan** (256MB za darmo)
4. Kliknij **Create**
5. Vercel automatycznie doda zmienne `POSTGRES_URL`, `POSTGRES_PRISMA_URL`, itd.

### Krok 4: Dodaj Vercel Blob Storage

1. W tej samej zakładce **Storage**
2. Kliknij **Create Database** → **Blob**
3. Wybierz **Free Plan** (10GB za darmo)
4. Kliknij **Create**
5. Vercel automatycznie doda zmienną `BLOB_READ_WRITE_TOKEN`

### Krok 5: Dodaj PAYLOAD_SECRET

1. Idź do **Settings** → **Environment Variables**
2. Dodaj nową zmienną:
   - **Name**: `PAYLOAD_SECRET`
   - **Value**: Wygeneruj losowy ciąg (min. 32 znaki)
   
   Możesz użyć tej komendy w terminalu:
   ```bash
   openssl rand -base64 32
   ```
   
   Lub online: [generate-secret.now.sh](https://generate-secret.now.sh/32)

3. Kliknij **Save**

### Krok 6: Redeploy

1. Idź do zakładki **Deployments**
2. Kliknij **...** przy ostatnim deploymencie → **Redeploy**
3. Poczekaj 2-3 minuty ☕

### Krok 7: Gotowe! 🎉

Otwórz `https://twoja-aplikacja.vercel.app/admin` i:
1. Stwórz pierwsze konto administratora
2. Zaloguj się
3. Dodaj produkty, kategorie i zdjęcia!

---

## 📁 Struktura projektu

```
payload-vercel-ecommerce/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout
│       ├── page.tsx         # Home page
│       └── globals.css      # Tailwind styles
├── payload.config.ts        # Payload configuration
├── next.config.mjs          # Next.js config
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
└── .env.example             # Example env variables
```

## 🔧 Zmienne środowiskowe

Vercel automatycznie ustawi:
- `POSTGRES_URL` - connection string do bazy
- `BLOB_READ_WRITE_TOKEN` - token dla Blob Storage

Ty musisz dodać tylko:
- `PAYLOAD_SECRET` - tajny klucz (min. 32 znaki)

## 🛠️ Development lokalny (opcjonalne)

Jeśli chcesz testować lokalnie:

```bash
# Sklonuj repo
git clone https://github.com/MarinexIT/payload-store.git
cd payload-store

# Zainstaluj zależności
npm install

# Skopiuj zmienne z Vercel
# Settings → Environment Variables → Download .env.local

# Uruchom dev server
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000)

## 📚 Kolekcje

### Products (Produkty)
- `title` - Nazwa produktu
- `description` - Opis (rich text)
- `price` - Cena
- `images` - Zdjęcia (Vercel Blob)
- `categories` - Relacja do kategorii
- `stock` - Stan magazynowy
- `featured` - Wyróżniony produkt
- `slug` - URL slug

### Categories (Kategorie)
- `name` - Nazwa kategorii
- `description` - Opis
- `slug` - URL slug

### Orders (Zamówienia)
- `orderNumber` - Numer zamówienia
- `customer` - Relacja do użytkownika
- `items` - Produkty w zamówieniu
- `total` - Suma
- `status` - Status (pending, processing, shipped, delivered, cancelled)

### Users (Użytkownicy)
- `email` - Email (logowanie)
- `password` - Hasło (zaszyfrowane)
- `name` - Imię

### Media (Zdjęcia)
- Upload files stored in Vercel Blob
- `alt` - Tekst alternatywny

## 🔌 API Endpoints

Payload automatycznie generuje:

- **REST API**: `https://twoja-aplikacja.vercel.app/api/{collection}`
  - GET `/api/products` - Lista produktów
  - GET `/api/products/:id` - Szczegóły produktu
  - POST `/api/products` - Dodaj produkt (wymaga auth)
  - PATCH `/api/products/:id` - Edytuj (wymaga auth)
  - DELETE `/api/products/:id` - Usuń (wymaga auth)

- **GraphQL**: `https://twoja-aplikacja.vercel.app/api/graphql`

- **GraphQL Playground**: `https://twoja-aplikacja.vercel.app/api/graphql-playground`

## 🎨 Customizacja

### Dodaj nowe pole do produktu

Edytuj `payload.config.ts`:

```typescript
{
  slug: 'products',
  fields: [
    // ... istniejące pola
    {
      name: 'sku',
      type: 'text',
      label: 'SKU',
    },
  ],
}
```

Commit i push - Vercel automatycznie zaktualizuje!

### Zmień kolory panelu admina

W `payload.config.ts` dodaj:

```typescript
admin: {
  user: 'users',
  meta: {
    titleSuffix: '- Mój Sklep',
    favicon: '/favicon.ico',
  },
},
```

## 🐛 Troubleshooting

### Build Failed - "relation does not exist"
- Sprawdź czy `POSTGRES_URL` jest ustawiony w Environment Variables
- Redeploy projektu

### Nie mogę uploadować zdjęć
- Sprawdź czy `BLOB_READ_WRITE_TOKEN` jest ustawiony
- Upewnij się że Vercel Blob jest aktywny w zakładce Storage

### "Payload Secret is not defined"
- Dodaj `PAYLOAD_SECRET` w Environment Variables
- Musi mieć minimum 32 znaki

## 📖 Dokumentacja

- [Payload CMS](https://payloadcms.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Vercel Blob](https://vercel.com/docs/storage/vercel-blob)
- [Next.js](https://nextjs.org/docs)

## 🤝 Contributing

Pull requesty są mile widziane!

## 📝 License

MIT

---

Zrobione z ❤️ używając [Payload CMS](https://payloadcms.com)