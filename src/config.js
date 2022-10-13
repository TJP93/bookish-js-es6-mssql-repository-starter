
export const mssqlConnectionConfig = {
    user: 'sa',
    password: 'bootcamp2022',
    server: 'localhost\\BOOTCAMPSQL', // You can use 'localhost\\instance' to connect to named instance
    database: 'bookish',
    options: {
        "enableArithAbort": true
    }
};

export const secret = 'bookish-secret';



