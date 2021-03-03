import React, {useState} from 'react';
import ArrowHeader from '../Arrowheader'
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  Grid,
  MenuItem,
  Select,
  FormControl,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Register({back,next}) {
  const classes = useStyles();
  const [options,setOptions] = useState([{val: false, opt: 'Welfare'}])
  const [Header, setHeader] = useState({
    MRNo: "",
    TokenNo: "",
    RegistrationDate: new Date(),
    Name: "",
    FatherOrHusband: "",
    DOB: new Date(),
    Age: "",
    Gender: "",
    Religion: "",
    District: "",
    City: "",
    Area: "",
    HousNo: "",
    Address: "",
    CNIC: "",
    Phone: "",
    OffPhone: "",
    Mobile: "",
    RefBy: "",
    Remarks: "",
    IsRejected: false,
    IsZakat: false,
    IsPAFEmp: false,
    MonthlyConsLimit: 0,
    ThumbImage: "",
    NOY: "",
    EmpID: "",
    IsStaff: false,
    CreateUser: "",
    ModifyUser: "",
    CreateDate: "",
    ModifyDate: ""
});

  const handleOption = (val) => {
    console.log(val)
    if (val == 'islam') {
      setOptions([...options, 'zakaat', {val: true, opt: 'Zakaat'}])
    }
  }
  const handleSubmit = () => {
    next()
  }

  return (
    <div>
    <ArrowHeader next={handleSubmit} back={back} title="Registration"/>
    <div style={{ padding: 16, margin: 'auto', maxWidth: '80%', justifyContent:'center' }}>
      <Grid container spacing={2}>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.MRNo} id="MRNo" fullWidth
            type="text" disabled={true}
            label="M.R. #"/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.TokenNo} id="TokenNo" type="text" fullWidth
            onChange={(e) => setHeader({ ...Header, TokenNo: e.target.value })}
            label="TokenNo"/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField id="RegistrationDate" label="Registration Date" type="date"
            value={Header.RegistrationDate} fullWidth
            onChange={(e) => setHeader({ ...Header, RegistrationDate: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.Name} id="Name" type="text" fullWidth
            onChange={(e) => setHeader({ ...Header, Name: e.target.value })}
            label="Name"/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.FatherOrHusband} id="FatherOrHusband" type="text" fullWidth
            onChange={(e) => setHeader({ ...Header, FatherOrHusband: e.target.value })}
            label="Father Name"/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField id="DOB" label="Date of Birth" type="date"
            value={Header.DOB} fullWidth
            onChange={(e) => setHeader({ ...Header, DOB: e.target.value })}
            InputLabelProps={{
              shrink: true,
            }}/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.Age} id="Age" type="number" fullWidth
            onChange={(e) => setHeader({ ...Header, Age: e.target.value })}
            label="Age"/>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <FormControl fullWidth>
            <InputLabel  id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select 
              labelId="demo-simple-select-helper-label"
              id="Gender"
              value={Header.Gender}
              onChange={(e) => setHeader({ ...Header, Gender: e.target.value })}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Religion</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="Religion"
              value={Header.Religion}
              onChange={ (e) => {
                handleOption(e.target.value)
                setHeader({ ...Header, Religion: e.target.value })
              }
              }>
              <MenuItem value="islam">Islam</MenuItem>
              <MenuItem value="christian">Christian</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-helper-label">IsZakat</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="IsZakat"
              value={Header.IsZakat}
              onChange={(e) => setHeader({ ...Header, IsZakat: e.target.value })}
            >
              {
                options.map(( item ) => (
                  <MenuItem value={item.val}>{item.opt}</MenuItem>
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12} lg={3}>
          <TextField value={Header.CNIC} id="CNIC" type="number" fullWidth
            onChange={(e) => setHeader({ ...Header, CNIC: e.target.value })}
            label="CNIC"/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid sm={12}>
          <Grid container spacing={2}>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.HousNo} id="HousNo" type="text" fullWidth
                onChange={(e) => setHeader({ ...Header, HousNo: e.target.value })}
                label="HousNo"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.Address} id="Address" type="text" fullWidth
                onChange={(e) => setHeader({ ...Header, Address: e.target.value })}
                label="Address"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.Area} id="Area" type="text" fullWidth
                onChange={(e) => setHeader({ ...Header, Area: e.target.value })}
                label="Area"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.District} id="District" type="text" fullWidth
                onChange={(e) => setHeader({ ...Header, District: e.target.value })}
                label="District"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.City} id="City" type="text" fullWidth
                onChange={(e) => setHeader({ ...Header, City: e.target.value })}
                label="City"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.Phone} id="Phone" type="number" fullWidth
                onChange={(e) => setHeader({ ...Header, Phone: e.target.value })}
                label="Phone"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.OffPhone} id="OffPhone" type="number" fullWidth
                onChange={(e) => setHeader({ ...Header, OffPhone: e.target.value })}
                label="Office Phone"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.Mobile} id="Mobile" type="number" fullWidth
                onChange={(e) => setHeader({ ...Header, Mobile: e.target.value })}
                label="Mobile"/>
            </Grid>
            <Grid item md={4} sm={12} lg={3}>
              <TextField value={Header.MonthlyConsLimit} id="MonthlyConsLimit" type="number" fullWidth
                onChange={(e) => setHeader({ ...Header, MonthlyConsLimit: e.target.value })}
                label="Monthly Consumtion Limit"/>
            </Grid>  
          </Grid>
        </Grid>
      </Grid>
      <br />
      
      <Grid container>
        <Grid sm={12}>
          <Grid container spacing={2}>
              <Grid item md={4} sm={12} lg={3}>
                <TextField value={Header.RefBy} id="RefBy" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, RefBy: e.target.value })}
                  label="Refered By"/>
              </Grid>
              <Grid item md={4} sm={12}  lg={3}>
                <TextField value={Header.EmpID} id="EmpID" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, EmpID: e.target.value })}
                  label="Employee ID"/>
              </Grid>
              <Grid item md={4} sm={12}  lg={3}>
                <TextField value={Header.NOY} id="NOY" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, NOY: e.target.value })}
                  label="NOY"/>
              </Grid>
              <Grid item md={4} sm={12}  lg={6}>
                <TextField value={Header.Remarks} id="Remarks" type="text" fullWidth
                  onChange={(e) => setHeader({ ...Header, Remarks: e.target.value })}
                  label="Remarks"/>
              </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
          <Grid col={12}>
            <Grid container spacing={2} style={{marginTop:'3%'}}>
              <Grid item md={4} sm={12}>
                <FormControlLabel color="primary" fullWidth
                control={<Checkbox checked={Header.IsPAFEmp} name="Is PAF Employee"
                onChange={e => setHeader({ ...Header, IsPAFEmp: !Header.IsPAFEmp })} />}
                label="Is PAF Employee"
              />
              </Grid>
              <Grid item md={4} sm={12}>
                <FormControlLabel color="primary" fullWidth
                  control={<Checkbox checked={Header.IsStaff} name="Is Staff" 
                  onChange={e => setHeader({ ...Header, IsStaff: !Header.IsStaff })} />}
                  label="Is Staff"
                />
              </Grid>
              <Grid item md={4} sm={12}>
                <FormControlLabel color="primary"
                  control={<Checkbox checked={Header.IsRejected} name="Is Rejected" fullWidth
                  onChange={e => setHeader({ ...Header, IsRejected: !Header.IsRejected })} />}
                  label="Is Rejected"
                />
              </Grid>                  
            </Grid>
          </Grid>
      </Grid>
    </div>
    </div>
  );
}

