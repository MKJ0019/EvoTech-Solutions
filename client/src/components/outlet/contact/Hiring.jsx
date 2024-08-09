import React, { useState } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";

export default function Hiring() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 9, p: 4, borderRadius: 2,}}
      >
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Join Our Team
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          sx={{ fontStyle: "italic", color: "gray" }}
        >
          "Your Success is Our Mission"
        </Typography>

        <Typography variant="subtitle1" align="center" gutterBottom>
          We're looking for talented individuals to help us grow.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            required
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            variant="outlined"
            required
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            variant="outlined"
            required
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Position Applied For"
            name="position"
            variant="outlined"
            required
            margin="normal"
            value={formData.position}
            onChange={handleChange}
          />

          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle2">Upload Resume</Typography>
            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ mt: 1 }}
            >
              Choose File
              <input
                type="file"
                hidden
                name="resume"
                required
                onChange={handleChange}
              />
            </Button>
            {formData.resume && (
              <Typography variant="body2" sx={{ mt: 1 }}>
                {formData.resume.name}
              </Typography>
            )}
          </Box>

          <TextField
            fullWidth
            label="Cover Letter"
            name="coverLetter"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={formData.coverLetter}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit Application
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
