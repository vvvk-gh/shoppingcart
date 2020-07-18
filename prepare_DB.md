# 2nd Task Preparing the Database

## Creating a Database

```sql
create database shopdb;
```

## Creating User , Grant Privileges

```sql

 CREATE USER shopper IDENTIFIED BY 'shoppass';
 USE shopdb;
 GRANT ALL PRIVILEGES ON shopdb to shoppper;
 GRANT ALL PRIVILEGES ON shopdb.* to shoppper; //to all the tables in the database

```
