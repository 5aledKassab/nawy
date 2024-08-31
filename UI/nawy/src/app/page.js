"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import { TextField, MenuItem } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ApartmentCard from "../components/Card";

export default function Home() {
  const [apartments, setApartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortKey, setSortKey] = useState("");

  const getApartments = async () => {
    const res = await axios
      .get("http://localhost:8080/apartments")
      .then((result) => {
        setApartments(result.data.data);
      });
  };

  useEffect(() => {
    getApartments();
  }, []);

  const filteredApartments = apartments
    ?.filter(
      (apartment) =>
        apartment.unitName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apartment.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortKey) {
        case "price":
          return a.price - b.price;
        case "size":
          return a.size - b.size;
        case "bedrooms":
          return a.bedrooms - b.bedrooms;
        default:
          return 0;
      }
    });

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Sort By"
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
          variant="outlined"
          style={{ marginLeft: "20px", minWidth: "150px" }}
        >
          <MenuItem value="price">Price</MenuItem>
          <MenuItem value="size">Size</MenuItem>
          <MenuItem value="bedrooms">Bedrooms</MenuItem>
        </TextField>
      </div>
      <Grid container spacing={4}>
        {filteredApartments?.map((apartment) => (
          <Grid key={apartment.id} size={{ xs: 12, md: 6 }}>
            <ApartmentCard apartment={apartment} />{" "}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
