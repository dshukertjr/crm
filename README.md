# SQL
```sql

create table if not exists public.users (
  id uuid references auth.users on delete cascade not null primary key,
  name varchar(50) not null unique,
  description varchar(320) not null,
  image_url text,

  constraint username_validation check (char_length(name) >= 1)
);

create table if not exists public.groups (
  id uuid not null primary key default uuid_generate_v4 (),
  name varchar(50) not null unique,
  description varchar(320) not null,
  admin_user_id uuid references public.users on delete cascade not null
);

create table if not exists public.users_groups (
  user_id uuid references public.users on delete cascade not null,
  group_id uuid references public.groups on delete cascade not null,
  primary key (user_id, group_id)  
);

create table if not exists public.people (
    id uuid not null primary key default uuid_generate_v4 (),
    first_name varchar(50),
    last_name varchar(50),
    email text,
    phone text,
    group_id uuid references public.groups on delete cascade not null
);

```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
