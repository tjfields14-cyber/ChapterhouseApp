
-- Simple schema for profiles
create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  username text unique,
  avatar_url text,
  created_at timestamp with time zone default now()
);
comment on table public.profiles is 'Basic profiles for avatar bindings';
