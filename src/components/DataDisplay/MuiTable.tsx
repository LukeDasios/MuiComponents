import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const data = [
  {
    id: 1,
    first_name: "Jamesy",
    last_name: "Dally",
    email: "jdally0@webeden.co.uk",
    gender: "Male",
    ip_address: "144.69.66.253",
  },
  {
    id: 2,
    first_name: "Wilden",
    last_name: "Bonhill",
    email: "wbonhill1@jiathis.com",
    gender: "Male",
    ip_address: "19.6.25.35",
  },
  {
    id: 3,
    first_name: "June",
    last_name: "Stivani",
    email: "jstivani2@sohu.com",
    gender: "Genderqueer",
    ip_address: "209.5.86.231",
  },
  {
    id: 4,
    first_name: "Shaina",
    last_name: "Sibbson",
    email: "ssibbson3@wikimedia.org",
    gender: "Female",
    ip_address: "167.180.98.246",
  },
  {
    id: 5,
    first_name: "Xaviera",
    last_name: "McCusker",
    email: "xmccusker4@goodreads.com",
    gender: "Female",
    ip_address: "136.66.144.39",
  },
  {
    id: 6,
    first_name: "Lenard",
    last_name: "Scoles",
    email: "lscoles5@liveinternet.ru",
    gender: "Male",
    ip_address: "195.60.213.168",
  },
  {
    id: 7,
    first_name: "Nels",
    last_name: "Johnstone",
    email: "njohnstone6@amazon.com",
    gender: "Male",
    ip_address: "112.111.217.230",
  },
  {
    id: 8,
    first_name: "Dell",
    last_name: "Brunnstein",
    email: "dbrunnstein7@redcross.org",
    gender: "Male",
    ip_address: "207.245.145.229",
  },
  {
    id: 9,
    first_name: "Myrle",
    last_name: "Guidone",
    email: "mguidone8@weather.com",
    gender: "Female",
    ip_address: "97.154.159.202",
  },
  {
    id: 10,
    first_name: "Shannan",
    last_name: "Juszczak",
    email: "sjuszczak9@photobucket.com",
    gender: "Male",
    ip_address: "199.9.163.190",
  },
];

export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: 300 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
