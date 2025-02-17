### **Full Documentation for BookKeeper Repository**  
**GitHub Repository:** [ytheg/Bookkeeper](https://github.com/ytheg/Bookkeeper.git)  

---

#### **1. Overview**  
**BookKeeper** is a double-entry bookkeeping system integrated with a modular database management system (DBMS) and a terminal user interface (TUI). Designed with simplicity and extensibility in mind, it adheres to the KISS principle and supports features like cryptocurrency wallet integration (non-custodial), schema compilation, and error logging. The project is actively developed in C and targets users seeking a customizable framework for financial tracking or database management .  

---

#### **2. Key Features**    
- **Double-Entry Accounting**: Tracks debits and credits with precision.  
- **Custom DBMS**: Built from scratch using AI Stevens' database design principles, supporting CRUD operations.  
- **Terminal User Interface (TUI)**: Powered by `ncurses` and `panel` libraries for an intuitive text-based interface.  
- **Non-Custodial Wallet Integration**: Under development for cryptocurrency management.  
- **Extensible Architecture**: Modular design for adding concurrency, networking, NLP, and security features.  

---

#### **3. Installation**  
**Prerequisites**:  
- GCC compiler  
- `ncurses` and `panel` libraries  
- `make`  

**Steps**:  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/ytheg/Bookkeeper.git  
   cd Bookkeeper  
   ```  
2. Compile the project:  
   ```bash  
   make  
   ```  
   This generates three executables:  
   - `ddl_compiler`: Compiles `.sch` schema files.  
   - `dbinit`: Initializes the database directory.  
   - `bookkeeper`: Main program.  
3. Create and initialize the database:  
   ```bash  
   mkdir /path/to/database  
   ./dbinit /path/to/database  
   ```  
4. Run the program:  
   ```bash  
   ./bookkeeper /path/to/database  
   ```  

---

#### **4. Usage Guide**  
- **Schema Files**: Define database structures using `.sch` files, compiled by `ddl_compiler` .  
- **TUI Operations**:  
  - Navigate menus using keyboard inputs.  
  - Perform CRUD operations on financial entries.  
  - View dynamic table presentations of data.  
- **Error Logging**: Check `logfile.c/h` for debugging and error tracking.  

---

#### **5. Project Structure**    
| File             | Description                                                                 |  
|------------------|-----------------------------------------------------------------------------|  
| `btree.c/h`      | B-tree implementation for indexing and fast lookups.                       |  
| `dml.c/h`        | Data Manipulation Language (DML) operations (insert, update, delete).      |  
| `dfile.c/h`      | File management utilities for the DBMS.                                    |  
| `program.c`      | Main entry point integrating all components.                               |  
| `bookkeeper.sch` | Schema file defining the relational database structure.                    |  

---

#### **6. Development Guide**  
- **Modular Design**: Extend functionality by adding modules for concurrency, networking, or NLP .  
- **Planned Features**:  
  - **Concurrency Daemon**: Support parallel database access.  
  - **Security Utilities**: Encryption and role-based authentication.  
  - **NLP Integration**: Simplify queries using natural language processing.  
- **Contributing**:  
  - Report bugs or suggest features via GitHub Issues.  
  - Submit pull requests for code improvements.  

---

#### **7. License**  
- Licensed under **GPL**. See [LICENSE](https://github.com/ytheg/Bookkeeper/blob/main/LICENSE) for details .  

---

#### **8. References**  
- **Inspirations**:  
  - AI Stevens (database design)  
  - Trust Wallet Core (non-custodial wallet concept)  
  - `ncurses` (TUI framework) .  

---

#### **9. Roadmap**  
- **Short-Term**: Enhance TUI for accounting operations and dynamic table rendering.  
- **Long-Term**: Integrate multiuser support, caching, and wallet utilities .  

---

For detailed technical discussions or contributions, refer to the [GitHub repository](https://github.com/ytheg/Bookkeeper.git) and the project’s [README](https://github.com/ytheg/Bookkeeper/blob/main/README.md).
