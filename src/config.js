
export const mssqlConnectionConfig = {
    user: 'sa',
    password: 'bootcamp2022',
    server: 'DESKTOP-ADTDQV8', // You can use 'localhost\\instance' to connect to named instance
    database: 'bookish',
    driver: 'msnodesqlv8',
    options: {
        "trustedConnection": false,
        "enableArithAbort": true,
        "instanceName" : "BOOTCAMPSQL"
    }

};

export const secret = 'bookish-secret';



