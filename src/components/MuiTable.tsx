import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const tableData = [
    {
        id: 1,
        first_name: 'Portie',
        last_name: 'Stiffkins',
        email: 'pstiffkins0@abc.net.au',
        gender: 'Polygender',
        ip_address: '205.103.236.46',
    },
    {
        id: 2,
        first_name: 'Guenevere',
        last_name: 'Zmitruk',
        email: 'gzmitruk1@dedecms.com',
        gender: 'Female',
        ip_address: '11.18.84.89',
    },
    {
        id: 3,
        first_name: 'Cam',
        last_name: 'Scopham',
        email: 'cscopham2@ted.com',
        gender: 'Female',
        ip_address: '205.158.184.110',
    },
    {
        id: 4,
        first_name: 'Rozanna',
        last_name: 'Bricknell',
        email: 'rbricknell3@pinterest.com',
        gender: 'Female',
        ip_address: '157.149.205.83',
    },
    {
        id: 5,
        first_name: 'Thorpe',
        last_name: 'Abrahamian',
        email: 'tabrahamian4@unblog.fr',
        gender: 'Male',
        ip_address: '190.202.24.144',
    },
    {
        id: 6,
        first_name: 'Norri',
        last_name: 'Guerro',
        email: 'nguerro5@geocities.jp',
        gender: 'Female',
        ip_address: '15.245.172.255',
    },
    {
        id: 7,
        first_name: 'Pammie',
        last_name: 'Tarburn',
        email: 'ptarburn6@ibm.com',
        gender: 'Female',
        ip_address: '75.192.50.211',
    },
    {
        id: 8,
        first_name: 'Ronny',
        last_name: 'Southorn',
        email: 'rsouthorn7@fastcompany.com',
        gender: 'Male',
        ip_address: '187.197.220.94',
    },
    {
        id: 9,
        first_name: 'Hill',
        last_name: 'Petrushanko',
        email: 'hpetrushanko8@epa.gov',
        gender: 'Male',
        ip_address: '71.90.122.192',
    },
    {
        id: 10,
        first_name: 'Hasheem',
        last_name: 'Presho',
        email: 'hpresho9@biblegateway.com',
        gender: 'Male',
        ip_address: '79.167.201.62',
    },
];
