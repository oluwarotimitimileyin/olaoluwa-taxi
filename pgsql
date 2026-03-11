olaoluwa-taxi
│
├ package.json
├ next.config.js
├ tailwind.config.js
├ postcss.config.js
├ .env.example
├ README.md
│
├ supabase
│   └ schema.sql
│
└ src
    ├ lib
    │   └ supabase.js
    │
    ├ pages
    │   ├ index.js
    │   ├ ride
    │   │   └ [qr].js
    │   │
    │   ├ admin
    │   │   └ index.js
    │   │
    │   └ api
    │       ├ create-payment-intent.js
    │       └ stripe-webhook.js
