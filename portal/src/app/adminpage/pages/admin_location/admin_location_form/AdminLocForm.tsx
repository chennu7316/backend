"use client";
import {Box,Button,Container,FormControl,FormHelperText,Grid,InputLabel,MenuItem,Select,SelectChangeEvent,TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import "../AdminLocation.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ReqDocsFormData {
  name: string;
  status: string;
}

interface IErrors {
  name: boolean;
  select: boolean;
}
const AdminLocForm = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const [error, setErrors] = useState<IErrors>({ name: false, select: false });
  const [textName, setTextName] = useState<string>("");
  const [select, setSelect] = useState<string>("");

  useEffect(() => {
    if (name) {
      setTextName(name);
      setSelect(status || '');
    }
  }, []);
  const handleTextChange = (event: SelectChangeEvent<string>) => {
    setTextName(event.target.value);
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    // debugger;
    setSelect(event.target.value);
  };

  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ReqDocsFormData>();

  const onSubmit: any = (e:any) => {
    e.preventDefault();
    // debugger
    if (!textName) {
      setErrors({ ...error, name: true });
    }
    if (!select) {
      setErrors({ ...error, select: true });
    }
    const payload: { name: string, status:string } = {name: textName, status: select};
    payload.name = textName;
    payload.status = select;
    console.log(payload, "payload");
   router.push("/adminpage/pages/admin_location")
  };

  return (
    <div className="addnew_cate">
      <Box>
        <form onSubmit={(e:any) => handleSubmit(onSubmit(e))}>
          <Container className="catecontbox">
            <div className="newcate_head">
              <h1>Add New Location</h1>
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={6} lg={6}>
                  <FormControl sx={{ minWidth: "100%" }}>
                    <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      size="small"
                      required
                      value={textName}
                      sx={{ height: "50 px" }}
                      {...register("name", { required: true })}
                      error={error.name}
                      helperText={error.name && "This name field is required"}
                      onChange={(e:any) => handleTextChange(e)}
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
                          labelId="status-label"
                          id="status"
                          label="Status"
                          // value={status??""}
                          {...field}
                          value={select}
                          onChange={(e) => handleSelectChange(e)}
                          required
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
                {name ? "Update" : "Submit"}
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => router.push("/adminpage/pages/admin_location")}
              >
                Cancel
              </Button>
            </div>
          </Container>
        </form>
      </Box>
    </div>
  );
};

export default AdminLocForm;
