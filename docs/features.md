---
layout: docs
title: Features
permalink: /features/
---

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
```plaintext
- Concurrency daemon (2024 Q1)
- Network utilities (2024 Q2)
- Natural Language Query Interface (2024 Q3)
```

---

## Why "Super Stupid"?
- **KISS Principle**: No abstraction layers.
- <5000 lines of C code (excluding dependencies).
- Single binary deployment.
