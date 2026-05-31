ALTER TABLE pages ADD COLUMN title TEXT;
ALTER TABLE pages ADD COLUMN description TEXT;
ALTER TABLE pages ADD COLUMN author TEXT;
ALTER TABLE pages ADD COLUMN is_library INTEGER NOT NULL DEFAULT 0;

CREATE INDEX IF NOT EXISTS idx_pages_library ON pages (is_library, created_at DESC);
