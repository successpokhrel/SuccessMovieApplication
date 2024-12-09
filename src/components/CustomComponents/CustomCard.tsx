import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardType ={
    image?: string;
    title: string;
    releaseDate: string;
    footerContent?: string;
}

export default function CustomCard({image, title, releaseDate}: CardType) {

  const backgroundStyle = image
      ? { backgroundImage: `url(${image})` }
      : { backgroundColor: 'rgba(0, 0, 0, 0.5)' };
  return (
    <Card style={backgroundStyle}>
      <CardHeader>
        <CardTitle className="text-white text-xl font-bold drop-shadow-md">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white text-sm drop-shadow-md">Released: {releaseDate}</p>
      </CardContent>
      
    </Card>
  );
}
