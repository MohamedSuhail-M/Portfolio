/*
# Create contact_submissions table

Stores every portfolio contact form submission so messages are never lost
even if the email delivery fails.

1. New Tables
  - `contact_submissions`
    - `id` uuid primary key
    - `name` text — visitor's name
    - `email` text — visitor's email address
    - `subject` text — message subject
    - `message` text — message body
    - `created_at` timestamptz — auto-set on insert

2. Security
  - RLS enabled
  - anon + authenticated INSERT (so the frontend anon key can write)
  - No SELECT policy (submissions are private; read them via Supabase dashboard)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  name       text        NOT NULL,
  email      text        NOT NULL,
  subject    text        NOT NULL,
  message    text        NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
