import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import {
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants';

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: '320px',
        height: '300px',
        boxShadow: 3,
        borderRadius: '12px',
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.03)' },
        backgroundColor: '#121212',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ display: 'block' }}>
        <CardMedia
          component='img'
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: '100%', height: '180px', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1e1e1e', color: '#FFF', p: 2, flexGrow: 1 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl} style={{ textDecoration: 'none' }}>
          <Typography variant='subtitle1' fontWeight='bold' sx={{ color: '#FFF', mb: 1 }}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Box display='flex' alignItems='center'>
          <Link
            to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
            style={{ textDecoration: 'none' }}
          >
            <Typography variant='subtitle2' fontWeight='bold' sx={{ color: 'gray' }}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }} />
            </Typography>
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;