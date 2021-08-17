
import { Container, createTheme, Grid, ThemeProvider, makeStyles } from '@material-ui/core';
import './App.css';
import { FeaturedPost } from './components/FeaturedPost';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Main from './components/Main';
import { PostCard } from './components/PostCard';
import Sidebar from './components/Sidebar';
import { featuredPosts, sidebar } from './data/Data';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const classes = useStyles();


  return (
    <ThemeProvider theme={darkTheme}>
    <Container>
      <Header/>
      <FeaturedPost/>
      <br/>
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <PostCard post={post} key={post.title}/>
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="hello world"/>
        <Sidebar 
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </Container>
    <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
    />
    </ThemeProvider>
  );
}

export default App;
