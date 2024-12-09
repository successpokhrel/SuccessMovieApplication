import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

type CardType ={
    image?: string;
    title: string;
    releaseDate: string;
    footerContent?: string;
    movieId: string;
}

export default function CustomCard({image, title, releaseDate, movieId}: CardType) {

  const backgroundStyle = image
      ? { backgroundImage: `url(${image})` }
      : { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
  return (
    <Link to={`/${movieId}`}>
      <Card style={backgroundStyle}>
      <CardHeader>
        <CardTitle className="text-white text-xl font-bold drop-shadow-md">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white text-sm drop-shadow-md">Released: {releaseDate}</p>
      </CardContent>
    </Card>
    </Link>
  );
}
