import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [error, setError] = useState({ value: false, message: "" });

  const handleSearch = () => {
    if (search.trim() === "") {
      setError({ value: true, message: "Please enter a search term" });
    } else {
      router.push({ pathname: "/items", query: { search: search } });
    }
  };

  const handleErrors = (e) => {
    if (e.target.value.trim() !== "") {
      setError({ value: false, message: "" });
    }
    setSearch(e.target.value);
  };

  return (
    <Box
      className="bg-slate-100"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h1" gutterBottom>
        Looking for a book?
      </Typography>
      <div className="flex flex-row justify-center items-start w-1/2">
        <TextField
          error={error.value}
          className="w-full"
          id="search-bar"
          label="Search Bar"
          placeholder="Search for a book"
          variant="outlined"
          onChange={(e) => handleErrors(e)}
          helperText={error.value ? error.message : ""}
        />
        <Button
          className="flex h-[56px] ml-1"
          variant="outlined"
          onClick={handleSearch}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
    </Box>
  );
};

export default HomePage;
