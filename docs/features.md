# Features 🚀

## Core Features (Implemented)

### 📚 Double-Entry Accounting
- Track debits/credits with precision.
- Supports multi-currency transactions.
- Custom schema-driven database design.

### 🛠️ Custom DBMS
- Built in C following **AI Stevens' database style**.
- B-tree indexing (`btree.c`).
- Transaction logging (`logfile.c`).
- File-based storage (`dfile.c`).

### 🖥️ Terminal User Interface (TUI)
- Powered by `ncurses` and `panel` libraries.
- Hierarchical account navigation.
- Real-time balance validation.

### 🔧 Utilities
- DDL Compiler: Compiles `.sch` schema files.
- `dbinit` tool: Database directory initialization.

---

## Upcoming Features (Under Development)

### 🌐 Non-Custodial Wallet Integration
- Manage crypto assets (inspired by **Trust Wallet Core**).
- Cold storage key management (C-only implementation).

### 🚧 Work-in-Progress
