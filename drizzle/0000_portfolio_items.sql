CREATE TABLE IF NOT EXISTS portfolio_items (
  id TEXT PRIMARY KEY NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('work', 'product')),
  title TEXT NOT NULL,
  media_key TEXT NOT NULL,
  media_type TEXT NOT NULL,
  created_at TEXT NOT NULL
);
