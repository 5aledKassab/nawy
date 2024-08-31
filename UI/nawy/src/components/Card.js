import { useRouter } from "next/navigation";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const ApartmentCard = ({ apartment }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/apartments?id=${apartment._id}`);
  };

  return (
    <Card
      sx={{ height: 400 }}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <CardMedia
        component="img"
        height="140"
        image={apartment.image}
        alt={apartment.unitName}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {apartment.unitName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apartment.address}
        </Typography>
        <Typography variant="h6" component="div">
          ${apartment.price}
        </Typography>
        <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
          <IconButton>
            <BedIcon /> {apartment.bedrooms}
          </IconButton>
          <IconButton>
            <BathtubIcon /> {apartment.bathrooms}
          </IconButton>
          <IconButton>
            <SquareFootIcon /> {apartment.areaInMetersSquared} m²
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default ApartmentCard;
