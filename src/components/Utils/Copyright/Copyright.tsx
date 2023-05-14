import { Link, Typography } from '@mui/material';

interface IAuthorsProps {
  authors: {
    name: string;
    url: string;
  }[];
}

const Copyright = ({ authors }: IAuthorsProps) => {
  const links = authors.map((author, i) => (
    <Link
      key={i}
      href={author.url}
      target='_blank'
      rel='noopener noreferrer'
      color='inherit'
      underline='none'
      sx={{
        '&:hover': { color: 'primary.main' },
      }}>
      {author.name}
      {authors.length !== i + 1 ? ', ' : ' '}
    </Link>
  ));

  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      {links}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
