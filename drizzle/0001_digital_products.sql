CREATE TABLE IF NOT EXISTS product_assets (
  item_id TEXT PRIMARY KEY,
  price_cents INTEGER NOT NULL,
  content_key TEXT NOT NULL,
  content_type TEXT NOT NULL,
  content_name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  FOREIGN KEY (item_id) REFERENCES portfolio_items(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS product_purchases (
  id TEXT PRIMARY KEY,
  item_id TEXT NOT NULL,
  buyer_id TEXT NOT NULL,
  amount_cents INTEGER NOT NULL,
  payment_provider TEXT NOT NULL,
  provider_trade_no TEXT,
  status TEXT NOT NULL,
  created_at TEXT NOT NULL,
  paid_at TEXT,
  UNIQUE (item_id, buyer_id),
  FOREIGN KEY (item_id) REFERENCES portfolio_items(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_product_purchases_buyer ON product_purchases(buyer_id, status);

