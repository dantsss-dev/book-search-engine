import Image from "next/legacy/image";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Custom500() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      <div className="block w-full md:w-3/4 max-w-4xl px-5">
        <Image
          src="/assets/500-image.jpg"
          alt="error image"
          layout="responsive"
          width={2000}
          height={2000}
        />
      </div>
      <Link className="w-full md:w-1/2 lg:w-1/5 h-12 mt-6 px-5" href="/">
        <Button
          className="w-full h-full"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
        >
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
