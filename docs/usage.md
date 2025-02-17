# Basic Usage 📖

## TUI Interface
```
+---------------------------------------+
| Accounts    Transactions    Reports   | <-- Menu
+---------------------------------------+
| 101 Cash                   $5000.00   | 
| 201 Accounts Payable       $1000.00   | <-- Workspace
+---------------------------------------+
| F1:Help  Ctrl+S:Save  Ctrl+Q:Quit     | <-- Status Bar
+---------------------------------------+
```

## Key Commands
| Key Combination       | Action                          |
|-----------------------|---------------------------------|
| `F2`                  | Create new account/transaction  |
| `Tab`                 | Cycle through fields            |
| `Ctrl+A`              | Add journal entry               |
| `Ctrl+D`              | Delete selected item            |

## Compiling Schemas
1. Create schema file (`accounting.sch`):
```sql
TABLE Accounts (
    account_id INT PRIMARY KEY,
    account_name TEXT NOT NULL,
    type ENUM('Asset','Liability','Equity')
);
```

2. Compile with DDL compiler:
```bash
./ddl_compiler accounting.sch ~/bookkeeper_db
```

## Limitations (Current Development)
- ❌ No undo/redo functionality
- ❌ Wallet integration incomplete
- ❌ No CSV export (coming v0.2)
