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
      className="flex flex-col w-full h-screen gap-4 justify-start pt-60 md:pt-0 md:justify-center items-center bg-slate-100 "
      noValidate
      autoComplete="off"
    >
      <Typography
        className="text-4xl md:text-5xl lg:text-7xl"
        variant="h1"
        gutterBottom
      >
        Looking for a book?
      </Typography>
      <div className="flex flex-row justify-center items-start w-11/12 md:w-3/4 lg:w-1/2">
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
