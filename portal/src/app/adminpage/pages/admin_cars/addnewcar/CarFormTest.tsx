"use client";
import {
  Box,
  Button,
  Container,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import "../AdminCars.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface carFormData {
  name: string;
  brand: string;
  category: string;
  year: string;
  location: string;
  vehicleType: string;
  featuredCar: string;
  status: string;
  description: string;
  pricing: string;
  discountedPrice: string;
  actualPrice: string;
  discountedPriceWeekly: string;
  actualPriceMonthly: string;
  discountedPriceMonthly: string;
  engineCapacity: string;
  laggage: string;
  transmission: string;
  cruiseControl: string;
  unlimitedMileage: string;
  paiInsuranceDaily: string;
  paiInsuranceMonthly: string;
  freeCancellation: string;
  freeDelivery: string;
  customerSupport: string;
  scdwPerMonth: string;
  engineSize: string;
  bluetooth: string;
  aux: string;
  seater: string;
  navigation: string;
  parkingSense: string;
}

const CarFormTest = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<carFormData>();

  const onSubmit = (data: carFormData) => {
    console.log(data);
  };

  const [formData, setFormData] = useState({
    selectCar: {
      name: "",
      carBrand: "",
      version: "",
      makeYear: "",
    },
    carSpecs: {
      AvailableColors: [],
      carFeatures: [],
      specs: "",
      CruiseControl: false,
      FuelType: "",
      EngineCapacity: "",
      BootCapacity: "",
    },
    PRICING: {
      PricePerDay: "",
      MinimumDayBooking: "",
      PricePerWeek: "",
      ExtraMillingCost: "",
      CDW: "",
    },
    RentalTerms: {
      Security: "",
      ExcessClaim: "",
      Delivery: "",
      SpecialNote: "",
    },
    MonthlyPricing: {
      "1month": [],
      "3months": [],
      "6months": [],
      "12months": [],
      CDW: "",
    },
  });

  const handle = (e: any) => {
    console.log("welcomeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
    const newFormData: any = { ...formData };
    newFormData[e.target.name] = e.target.value;
    console.log(
      (newFormData[e.target.name] = e.target.value),
      "newFormData[e.target.name]=e.target.value"
    );
    setFormData(newFormData);
    console.log(newFormData, "newDAatattttttttttttttt");
  };

  const Submit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/user/createNewCar",
        formData
      );
      console.log(formData);

      if (response.status === 201) {
        // Car creation was successful
        alert("Car added successfully!");
        // Optionally, you can redirect the user or perform other actions here
      } else {
        // Handle error responses from the API
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <div className="addcar_form">
      <Box>
        <form onSubmit={(e) => Submit(e)}>
          <Container className="formcontbox">
            <div className="pageheading">
              <h1>Add a new car</h1>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("name", { required: true })}
                      error={!!errors.name}
                      helperText={errors.name && "field is required"}
                      name="selectCar.name"
                      value={formData.selectCar.name}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Brand</InputLabel>
                    <Controller
                      name="brand"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Slug"
                          {...field}
                          name="selectCar.carBrand"
                          value={formData.selectCar.carBrand}
                          onChange={(e) => handle(e)}
                        >
                          <MenuItem value="Hyundai">Hyundai</MenuItem>
                          <MenuItem value="Kia">Kia</MenuItem>
                          <MenuItem value="Mazda">Mazda</MenuItem>
                          <MenuItem value="Mitsubushi">Mitsubushi</MenuItem>
                          <MenuItem value="Nissan">Nissan</MenuItem>
                          <MenuItem value="Toyota">Toyota</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.brand?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Model</InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      label="Model"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Category
                    </InputLabel>
                    <Controller
                      name="category"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Category"
                          {...field}
                        >
                          <MenuItem value="Crossover">Crossover</MenuItem>
                          <MenuItem value="Hatchback">Hatchback</MenuItem>
                          <MenuItem value="Luxury Cars">Luxury Cars</MenuItem>
                          <MenuItem value="Luxury Suv">Luxury Suv</MenuItem>
                          <MenuItem value="Sedan">Sedan</MenuItem>
                          <MenuItem value="Small Sedan">Small Sedan</MenuItem>
                          <MenuItem value="SUV">SUV</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.brand?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Year</InputLabel>
                    <Controller
                      name="year"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Year"
                          {...field}
                        >
                          <MenuItem value="2013">2013</MenuItem>
                          <MenuItem value="2014">2014</MenuItem>
                          <MenuItem value="2015">2015</MenuItem>
                          <MenuItem value="2016">2016</MenuItem>
                          <MenuItem value="2017">2017</MenuItem>
                          <MenuItem value="2018">2018</MenuItem>
                          <MenuItem value="2019">2019</MenuItem>
                          <MenuItem value="2020">2020</MenuItem>
                          <MenuItem value="2021">2021</MenuItem>
                          <MenuItem value="2022">2022</MenuItem>
                          <MenuItem value="2023">2023</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.year?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <Button variant="outlined" component="label">
                      Upload Car Image
                      <input type="file" hidden />
                    </Button>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Location
                    </InputLabel>
                    <Controller
                      name="location"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Location"
                          {...field}
                        >
                          <MenuItem value="Abu Dhabi">Abu Dhabi</MenuItem>
                          <MenuItem value="Dubai">Dubai</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.location?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Vehicle Type
                    </InputLabel>
                    <Controller
                      name="vehicleType"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Vehicle Type"
                          {...field}
                        >
                          <MenuItem value="Economy">Economy</MenuItem>
                          <MenuItem value="Luxury">Luxury</MenuItem>
                          <MenuItem value="30">SUV</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.vehicleType?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Featured Car ?
                    </InputLabel>
                    <Controller
                      name="featuredCar"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Featured Car"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.featuredCar?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          {...field}
                        >
                          <MenuItem value="Active">Active</MenuItem>
                          <MenuItem value="Inactive">Inactive</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.status?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="car_services">
              <h4>Services</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="24/7 Roadside Assistance"
                  />
                </Grid>
                <Grid item xs={12} sm={5} md={5} lg={5}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Drop Off Anywhere In Dubai And Abu Dhabi"
                  />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Service & Maintenance Free"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_description">
              <h4>Description</h4>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                sx={{ width: "100%" }}
                {...register("description", { required: true })}
                error={!!errors.description}
                helperText={errors.description && "field is required"}
              />
            </div>
            <div className="car_pricing">
              <h4>Pricing</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("pricing", { required: true })}
                      error={!!errors.pricing}
                      helperText={errors.pricing && "field is required"}
                      name="PRICING.PricePerDay"
                      value={formData.PRICING.PricePerDay}
                      onChange={(e) => handle(e)}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("discountedPrice", { required: true })}
                      error={!!errors.discountedPrice}
                      helperText={errors.discountedPrice && "field is required"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Weekly) "
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("actualPrice", { required: true })}
                      error={!!errors.actualPrice}
                      helperText={errors.actualPrice && "field is required"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Weekly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("discountedPriceWeekly", { required: true })}
                      error={!!errors.discountedPriceWeekly}
                      helperText={
                        errors.discountedPriceWeekly && "field is required"
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Actual Price (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("actualPriceMonthly", { required: true })}
                      error={!!errors.actualPriceMonthly}
                      helperText={
                        errors.actualPriceMonthly && "field is required"
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Discounted Price (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("discountedPriceMonthly", {
                        required: true,
                      })}
                      error={!!errors.discountedPriceMonthly}
                      helperText={
                        errors.discountedPriceMonthly && "field is required"
                      }
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="car_specification">
              <h4>Car Specification</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Transmission</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="transmission"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                        >
                          <MenuItem value="Manual">Manual</MenuItem>
                          <MenuItem value="Automatic">Automatic</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.transmission?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Cruise Control</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="cruiseControl"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.cruiseControl?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Engine Capacity</h5>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <Controller
                      name="engineCapacity"
                      control={control}
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          {...field}
                        >
                          <MenuItem value="1.2">1.2</MenuItem>
                          <MenuItem value="1.3">1.3</MenuItem>
                          <MenuItem value="1.5">1.5</MenuItem>
                          <MenuItem value="1.6">1.6</MenuItem>
                          <MenuItem value="1.8">1.8</MenuItem>
                          <MenuItem value="2.0">2.0</MenuItem>
                          <MenuItem value="2.4">2.4</MenuItem>
                          <MenuItem value="2.5">2.5</MenuItem>
                          <MenuItem value="2.7">2.7</MenuItem>
                          <MenuItem value="5.7">5.7</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.engineCapacity?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <h5>Laggage (Boot Capacity)</h5>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("laggage", {
                        required: true,
                      })}
                      error={!!errors.laggage}
                      helperText={errors.laggage && "field is required"}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="rental_terms">
              <h4>Rental Terms</h4>
              <h5>Security Deposit</h5>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Cash" />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Credit Card"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_features">
              <h4>Car Features</h4>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Automatic Mirrors"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="USB" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Reverse Camera"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Alloy Wheels"
                  />
                </Grid>
              </Grid>
            </div>
            <div className="car_details">
              <h4>Car Details</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Unlimited Mileage
                    </InputLabel>
                    <Controller
                      name="unlimitedMileage"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Unlimited Mileage"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="20">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.unlimitedMileage?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="PAI Insurance (Daily)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("paiInsuranceDaily", {
                        required: true,
                      })}
                      error={!!errors.paiInsuranceDaily}
                      helperText={
                        errors.paiInsuranceDaily && "field is required"
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="PAI Insurance (Monthly)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("paiInsuranceMonthly", {
                        required: true,
                      })}
                      error={!!errors.paiInsuranceMonthly}
                      helperText={
                        errors.paiInsuranceMonthly && "field is required"
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Cancellation
                    </InputLabel>
                    <Controller
                      name="freeCancellation"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Free Cancellation"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.freeCancellation?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Free Delivery (30 Days and Above)
                    </InputLabel>
                    <Controller
                      name="freeDelivery"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Free Delivery (30 Days and Above)"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.freeDelivery?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      24x7 Customer Support
                    </InputLabel>
                    <Controller
                      name="customerSupport"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="24x7 Customer Support"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.customerSupport?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="SCDW (per month)"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("scdwPerMonth", {
                        required: true,
                      })}
                      error={!!errors.scdwPerMonth}
                      helperText={errors.scdwPerMonth && "field is required"}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="payment_type">
              <h4>Payment Type</h4>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Credit Card"
                  />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Debit Card" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="UPI" />
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                  <FormControlLabel control={<Checkbox />} label="Cash" />
                </Grid>
              </Grid>
            </div>
            <div className="other_features">
              <h4>Other Features</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Engine Size"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("engineSize", {
                        required: true,
                      })}
                      error={!!errors.engineSize}
                      helperText={errors.engineSize && "field is required"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Bluetooth
                    </InputLabel>
                    <Controller
                      name="bluetooth"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Bluetooth"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.bluetooth?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Aux</InputLabel>
                    <Controller
                      name="aux"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Aux"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>{errors.aux?.message}</FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Seater</InputLabel>
                    <Controller
                      name="seater"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Seater"
                          {...field}
                        >
                          <MenuItem value="5 Seater">5 Seater</MenuItem>
                          <MenuItem value="7 Seater">7 Seater</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.seater?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Navigation
                    </InputLabel>
                    <Controller
                      name="navigation"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Navigation"
                          {...field}
                        >
                          <MenuItem value="Yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.navigation?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">
                      Parking Sense
                    </InputLabel>
                    <Controller
                      name="parkingSense"
                      control={control}
                      defaultValue=""
                      rules={{ required: "field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Parking Sense"
                          {...field}
                        >
                          <MenuItem value="yes">Yes</MenuItem>
                          <MenuItem value="No">No</MenuItem>
                        </Select>
                      )}
                    />
                    <FormHelperText error>
                      {errors.parkingSense?.message}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              </Grid>
            </div>
            <div className="required_documents">
              <h4>Required Documents</h4>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h5>Requirements (For UAE Residents)</h5>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <h5>Requirements (For Tourists)</h5>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Emirates Id"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Passport"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Residential Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Copy Of Visit Visa"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Uae Driving License"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Us, Canada, Eu, Gcc Or International Driving License"
                    />
                  </FormGroup>
                </Grid>
              </Grid>
            </div>
            <div className="carformbtn">
              <Button
                type="submit"
                variant="contained"
                className="submitbtn"
                color="primary"
              >
                Submit
              </Button>
              <Button variant="contained" color="error">
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default CarFormTest;
