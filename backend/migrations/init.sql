BEGIN TRANSACTION;

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE,
  password TEXT
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  code TEXT UNIQUE,
  name TEXT,
  description TEXT,
  brand TEXT,
  price REAL,
  stock INTEGER,
  category TEXT,
  animal TEXT
);

CREATE TABLE IF NOT EXISTS providers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  tradeName TEXT,
  phone TEXT,
  fax TEXT,
  address TEXT,
  productType TEXT
);

CREATE TABLE IF NOT EXISTS invoices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ruc TEXT,
  invoiceNumber TEXT,
  documentType TEXT,
  providerId INTEGER,
  productId INTEGER,
  descriptionFactura TEXT,
  brand TEXT,
  unitOfMeasure TEXT,
  quantity INTEGER,
  salePrice REAL,
  unitPrice REAL,
  discountRate REAL,
  discountAmount REAL,
  baseAmount REAL,
  taxRate REAL,
  taxAmount REAL,
  total REAL,
  date TEXT
);

CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  saleNumber TEXT,
  client TEXT,
  productId INTEGER,
  quantity INTEGER,
  unitPrice REAL,
  total REAL,
  date TEXT
);

CREATE TABLE IF NOT EXISTS expenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  type TEXT,
  quantity INTEGER,
  unitValue REAL,
  total REAL,
  date TEXT
);

COMMIT;