import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import { makeStyles } from "@mui/material";
import "./Signup.css";
import instaLogo from "../Assets/instagram.png";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';
import bgImage from '../Assets/carbg.jpg';
import slider from '../Assets/bg1.jpg';
import slider2 from '../Assets/bg2.jpg';
import slider3 from '../Assets/bg3.jpg';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
export default function Signup() {
  return (
    <div className="cardwrapper">
      <div
        className="imgsize"
        style={{
          backgroundImage: "url(" + bgImage + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="sliderimg">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={180}
            visibleSlides={1}
            step={1}
            isPlaying={true}
            infinite
            totalSlides={3}
          >
            <Slider>
              <Slide index={0}><Image src={slider}/></Slide>
              <Slide index={1}><Image src={slider2}/></Slide>
              <Slide index={2}><Image src={slider3}/></Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div className="card">
        <Card variant="outlined">
          <div className="img">
            <img src={instaLogo} className="instaLogo" alt="Instagram_Logo" />
          </div>
          <CardContent>
            <Typography
              style={{ color: "grey", textAlign: "center" }}
              variant="subtitle1"
            >
              Login to enjoy reels from your friends...
            </Typography>
            <Alert severity="error">
              This is an error alert — check it out!
            </Alert>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
            />
          </CardContent>
          <CardActions>
            <Button size="small" fullWidth variant="contained">
              Login
            </Button>
          </CardActions>
          <Typography
            style={{ color: "Blue", fontWeight: "bold ", textAlign: "center" }}
          >
            Forget Password ?
          </Typography>
        </Card>
        <Card variant="outlined" style={{ marginTop: "2.5%" }}>
          <CardContent size="small">
            <Typography style={{ color: "grey", textAlign: "center" }}>
              Don't have an account ?{" "}
              <Link
                to="/"
                style={{ textDecoration: "none", fontWeight: "bold" }}
              >
                Sign Up
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
