import * as React  from "react";
import { useContext,useEffect,useState} from "react";
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
import {Link,useNavigate} from 'react-router-dom';
import { Authcontext} from "../Context/AuthContext";
import {st,database} from "../components/fireConfig";
export default function Signup() {
  const s=useContext(Authcontext);
  const [email,setEmail]=useState();
  const [password,setPass]=useState();
  const [fname,setName]=useState();
  const [error,setError]=useState();
  const [file,setFile]=useState(null);
  const [loading,setLoading]=useState(false);
  const history=useNavigate();
  const handlClick=async()=>
  {
    if(email==null || password==null || fname==null || file==null)
    {
      setError('Please fill all the fields...');
      setTimeout(() => {
        setError(undefined);
      },3000);
      return;
    }
    try{
      setError(undefined);
      setLoading(true);
      let id=await s.signUp(email,password);
      //console.log(id);
      let uid=id.user.uid;
      let upload=st.ref(`/user/${uid}/profile_pic`).put(file);
      console.log("Uploading started and state changed...");
      upload.on('state_changed',f1,f2,f3);
      function f1(snapshot)
      {
          let progress=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
          console.log(progress);
      }
      function f2(err)
      {
        setError(err);
        setTimeout(() => {
          setError(undefined);
        },3000);
        return;
      }
      function f3()
      {
          upload.snapshot.ref.getDownloadURL().then((url)=>{
              console.log(url);
              database.user.doc(uid).set({UId:uid,FullName:fname,Email:email,Password:password,Profile_Pic:url,createdAt:database.getTimeStamp()});
          });
          setLoading(false);
          history('/');
      }
    }
    catch(err)
    {
      console.log("Catch is Started....");
      setError("Email already exists...");
      console.log(err);
      setTimeout(() => {
        setError(undefined);
      },5000);
      return;
    }
  }
  return (
    <div className="cardwrapper">
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
              Sign up to see reels from your friends
            </Typography>
            {error!==undefined &&<Alert severity="error">
              {error}
            </Alert>}
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              onChange={(e)=>setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              fullWidth={true}
              margin="dense"
              size="small"
              onChange={(e)=>setPass(e.target.value)}
            />
            <Button
              variant="contained"
              component="label"
              color="secondary"
              margin="none"
              size="small"
              fullWidth={true}
              startIcon={<CloudUploadIcon />}
              style={{ marginTop: "2%" }}
            >
              UPLOAD PROFILE IMAGE
              <input hidden accept="image/*" multiple type="file" onChange={(e)=>setFile(e.target.files[0]) }/>
            </Button>
          </CardContent>
          <CardActions>
            <Button size="small" fullWidth variant="contained" disabled={loading} onClick={handlClick}>
              Sign Up
            </Button>
          </CardActions>
          <Typography style={{ color: "grey", textAlign: "center" }}>
            People who use our service may have uploaded your contact
            information to Instagram.
            <br />
            By signing up, you agree to our Terms , Privacy Policy and Cookies
            Policy .
          </Typography>
        </Card>
        <Card variant="outlined" style={{marginTop:'2.5%'}}>
          <CardContent size='small'>
            <Typography
              style={{ color: "grey", textAlign: "center" }}
            >Have an account ? <Link to='/login' style={{textDecoration:'none',fontWeight:'bold'}}>Log in</Link></Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
