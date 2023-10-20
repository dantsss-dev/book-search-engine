import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { ActionAreaCard } from "../Components/ActionAreaCard";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";

const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const onGetBooks = async () => {
      try {
        const result = await fetch(`/api/items?query=${router.query.search}`);
        const data = await result.json();
        setBooks(data.items);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    onGetBooks();
  }, [router.query.search]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Box
      className="flex flex-col flex-wrap justify-center items-center w-full gap-4 bg-slate-100"
      component="form"
      sx={{
        height: "100vh",
      }}
      noValidate
      autoComplete="off"
    >
      <div className="w-full text-center">
        <Typography variant="h3" gutterBottom>
          Results for: {router.query.search}
        </Typography>
      </div>
      <div className="flex flex-row justify-center items-start w-full h-auto text-center gap-5">
        {books.map((book) => (
          <ActionAreaCard
            key={book.id}
            title={book.volumeInfo.title}
            date={book.volumeInfo.publishedDate}
            id={book.id}
            img={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : book.volumeInfo.imageLinks.thumbnail
            }
          />
        ))}
      </div>
      <Link className="w-32 h-12 mt-6" href="/">
        <Button
          className="w-full h-full"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Go Back
        </Button>
      </Link>
    </Box>
  );
};

export default SearchResults;
