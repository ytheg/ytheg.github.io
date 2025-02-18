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
