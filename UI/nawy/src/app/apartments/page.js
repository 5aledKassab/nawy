"use client";
import { useRouter } from "next/navigation";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Container,
} from "@mui/material";
import axios from "axios";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

export default function ApartmentDetails() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  const [apartment, setApartment] = useState(null);

  const getApartmentDetails = async () => {
    if (id) {
      const res = await axios
        .get(`http://localhost:8080/apartments/${id}`)
        .then((result) => {
          setApartment(result.data.data);
        });
    }
  };

  useEffect(() => {
    getApartmentDetails();
  }, [id]);

  if (!apartment) {
    return <p>Loading...</p>;
  }

  return (
    <Suspense>
      <Container
        style={{ height: "100%", marginTop: "20px", marginBottom: "40px" }}
      >
        <Card>
          <CardMedia
            component="img"
            height="400"
            image={apartment.image}
            alt={apartment.unitName}
          />
          <CardContent>
            <Typography variant="h4" component="div">
              {apartment.unitName}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {apartment.address}
            </Typography>
            <Typography variant="body1" style={{ marginTop: "20px" }}>
              Price: ${apartment.price}
            </Typography>
            <Typography variant="body1">
              Bedrooms: {apartment.bedrooms}
            </Typography>
            <Typography variant="body1">
              Bathrooms: {apartment.bathrooms}
            </Typography>
            <Typography variant="body1">
              Size: {apartment.areaInMetersSquared} m²
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Suspense>
  );
}
