"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "../EngineCapacity.css"

interface EngCapFormData {
  capacity: string;
  status: string;
}

const EngCapForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<EngCapFormData>();

  const onSubmit = (data: EngCapFormData) => {
    console.log(data);
  };

  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Engine Capacity</h1>

              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="outlined-basic"
                      label="Capacity"
                      variant="outlined"
                      size="small"
                      sx={{ height: "50px" }}
                      {...register("capacity", { required: true })}
                      error={!!errors.capacity}
                      helperText={errors.capacity && "This name field is required"}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }} size="small">
                    <InputLabel id="demo-select-small-label">Status</InputLabel>
                    <Controller
                      name="status"
                      control={control}
                      defaultValue=""
                      rules={{ required: "This status field is required" }}
                      render={({ field }) => (
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          label="Status"
                          {...field}
                        >
                          <MenuItem value={"active"}>Active</MenuItem>
                          <MenuItem value={"inactive"}>Inactive</MenuItem>
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
            <div className="magcatbtn">
              <Button
                variant="contained"
                type="submit"
                className="catsubmitbtn"
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

export default EngCapForm;


