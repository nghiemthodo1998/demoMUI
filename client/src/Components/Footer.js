import * as React from 'react';
import {
  Typography,
  Box,
  Container,
  TextField,
  Button,
  Grid,
  ButtonGroup,
  Paper,
  InputBase,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#0e0e0e',
        pt: 3,
        pb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            mt: 2,
            mb: 3,
            justifyContent: 'space-between',
          }}
        >
          <Typography color="white" sx={{ maxWidth: '400px' }}>
            <Typography>ĐĂNG KÝ NHẬN BẢN TIN</Typography>
            Nhận tất cả các thông tin mới nhất về Sự kiện, Bán hàng và Ưu đãi.
            Đăng ký nhận bản tin ngày hôm nay
          </Typography>
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
              height: 40,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google Maps"
            />
            <Button type="submit">Đăng kí</Button>
          </Paper>
          <ButtonGroup sx={{ background: 'white', height: 50 }}>
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <InstagramIcon />
            </Button>
            <Button>
              <TwitterIcon />
            </Button>
          </ButtonGroup>
        </Box>
        <hr />
        <Box sx={{ mt: 5 }}>
          <Grid container color="white">
            <Grid item xs={4}>
              <Typography variant="h5">Liên hệ với chúng tôi</Typography>
              <Typography variant="h6">Address:</Typography>
              <Typography>123 Street Name, City, HaNoi</Typography>
              <Typography variant="h6">Phone:</Typography>
              <Typography>Toll Free (123) 456-7890</Typography>
              <Typography variant="h6">Email:</Typography>
              <Typography>mail@example.com</Typography>
            </Grid>
            <Grid item xs={8}>
              <Grid container sx={{ mb: 5 }}>
                <Grid item xs={6}>
                  <Typography variant="h5">Sản phẩm</Typography>
                  <Typography>Shoes</Typography>
                  <Typography>Watches</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h5">Chính sách</Typography>
                  <Typography>Hướng dẫn thanh toán</Typography>
                  <Typography>Chính sách đổi trả</Typography>
                  <Typography>Chính sách giao hàng</Typography>
                </Grid>
              </Grid>
              <hr />
              <Typography>
                Porto eCommerce. © 2018. All Rights Reserved
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
