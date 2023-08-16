import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Male" src="https://img.freepik.com/free-icon/user_318-219687.jpg?t=st=1692208885~exp=1692209485~hmac=13e93c1cb9061c535132f1dffae2f2a80dca8dfc7adb2e56df21dbb52815f157" />
      <Avatar alt="Female" src="https://img.freepik.com/free-icon/girl_318-157505.jpg?t=st=1692208944~exp=1692209544~hmac=a465ac974f2d8f278167772329eb0ec94e98cd19924051aefb2ad90613a2eecd" />
      <Avatar alt="Kid" src="https://img.freepik.com/free-icon/boy_318-157591.jpg?t=st=1692208975~exp=1692209575~hmac=91243da17c11ce7bc4e78017d0ba9e0a39bfec674bc8067e220a8b61013a5395" />
    </Stack>
  );
}

export default ImageAvatars;
