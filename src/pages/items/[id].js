import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BookDetail = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const onGetBooks = async () => {
      try {
        const result = await fetch(`/api/itemById?id=${router.query.id}`);
        const data = await result.json();
        setBook(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    onGetBooks();
  }, [router.query.id]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Box className="flex flex-col justify-center items-center h-screen bg-slate-100 py-6">
      <Card className="w-1/3 flex flex-row px-4 py-4 overflow-auto">
        <CardMedia
          className="object-contain w-1/4"
          component="img"
          alt="cover image"
          image={
            book.volumeInfo.imageLinks === undefined
              ? ""
              : book.volumeInfo.imageLinks.thumbnail
          }
        />
        <CardContent className="flex flex-col ml-5 gap-3 w-3/4">
          <Typography className="w-full" variant="h3">
            {book.volumeInfo.title}
          </Typography>
          <Typography className="w-full" variant="h4">
            {book.volumeInfo.authors
              ? `Authors: ${book.volumeInfo.authors.map(
                  (author) => `${author} `
                )}`
              : ""}
          </Typography>
          <Typography className="w-full" variant="h6" color="text.secondary">
            {book.volumeInfo.publisher
              ? `Publisher: ${book.volumeInfo.publisher}`
              : ""}
            {book.volumeInfo.publishedDate
              ? ` ${book.volumeInfo.publishedDate}`
              : ""}
          </Typography>
          <Typography className="w-full" variant="h6" color="text.secondary">
            {book.volumeInfo.pageCount
              ? `Nº of Pages: ${book.volumeInfo.pageCount}`
              : ""}
          </Typography>
          <Typography className="w-full" variant="body1">
            {book.volumeInfo.description}
          </Typography>
        </CardContent>
      </Card>
      <Link className="w-1/3 h-12 mt-6" href="/">
        <Button
          className="w-full h-full"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Search Another Book
        </Button>
      </Link>
    </Box>
  );
};

export default BookDetail;
