import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";

export const ActionAreaCard = ({ title, date, id, img }) => {
  return (
    <Card className="flex grow w-full md:w-1/2 lg:w-3/4 max-w-[300px] min-h-[375px]">
      <CardActionArea>
        <Link href={`/items/${id}`}>
          <CardMedia
            className="object-contain p-2"
            sx={{ height: 140 }}
            component="img"
            image={img === "" ? "/assets/cover.png" : img}
            alt="cover image"
          />
          <CardContent className="border-t border-slate-300">
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {date}
            </Typography>
          </CardContent>
        </Link>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
