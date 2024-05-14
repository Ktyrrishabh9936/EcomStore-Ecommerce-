import React from 'react'
import { Grid,Typography,Button} from '@mui/material';
const Footer = () => {
  return (
    <div>
      <Grid className='mt-10 text-center bg-black text-white ' container>

        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5 capitalize' variant='h6'>Company</Typography>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Home</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>About</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Blog</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Press</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Jobs</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Parteners</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5 capitalize' variant='h6'>Company</Typography>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Home</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>About</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Blog</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Press</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Jobs</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Parteners</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5 capitalize' variant='h6'>Company</Typography>
            <div><Button type='' className='pb-5 capitalize' variant='h6' gutterButtom>Home</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>About</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Blog</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Press</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Jobs</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Parteners</Button></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3} >
            <Typography className='pb-5 capitalize' variant='h6'>Company</Typography>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Home</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>About</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Blog</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Press</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Jobs</Button></div>
            <div><Button className='pb-5 capitalize' variant='h6' gutterButtom>Parteners</Button></div>
        </Grid>

        <Grid className='pt-20' item xs={12}>
          <Typography variant='body2' component='p' align='center'>
            &copy; 2023 My Company,All right are reserved.
          </Typography>
          <Typography variant='body2' component='p' align='center'>
            Made by Rishabh Katiyar
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
