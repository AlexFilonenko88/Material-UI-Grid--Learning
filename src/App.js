import './App.css';
import Button from '@mui/material/Button';
import {
    AppBar,
    Toolbar,
    Container,
    IconButton,
    MenuItem,
    Typography,
    Box,
    Paper,
    Grid,
    CardMedia,
    Card,
    CardContent,
    CardActions,
    BottomNavigation,
    BottomNavigationAction,
    Dialog, DialogContent,
    TextField,
    DialogContentText, DialogActions,
    DialogTitle
} from '@mui/material';
import {makeStyles} from '@mui/styles';
import AirplayIcon from '@mui/icons-material/Airplay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import RestoreIcon from '@mui/icons-material/Restore';
import FolderIcon from '@mui/icons-material/Folder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import {spacing} from '@mui/system';
import {useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    // menuButton: {
    //     marginRight: theme.spacing(1)
    // },
    title: {
        flexGrow: 1
    },
    mainFeaturePost: {
        position: 'relative',
        // color: theme.palette.common.white,
        // marginBottom: theme.spacing(4),
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.3)",
    },
    mainFeaturePostContant: {
        position: "relative",
        padding: 10,
        marginTop: 100,
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    carsGrid: {
        marginTop: 4
    }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
    const classes = useStyles();
    const [value, setValue] = useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu">
                            <MenuItem/>
                        </IconButton>
                        <Typography
                            variant="h6"
                            className={classes.title}>
                            Изучение MUI
                        </Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
                            <Dialog opem={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Log in to see videos</DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Emsil Adress"
                                        type="email"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="pass"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose} color="primary">Cancel</Button>
                                    <Button onClick={handleClose} color="primary">Log in</Button>
                                </DialogActions>
                            </Dialog>

                        </Box>
                        <Button color="secondary" variant="contained">Sign Up</Button>
                    </Toolbar>
                </Container>
            </AppBar>

            <main>
                <Paper className={classes.mainFeaturePost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container fixed>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturePostContant}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom
                                    >
                                        Blog
                                    </Typography>
                                    <Typography
                                        variant="h5"
                                        color="inherit"
                                    >
                                        Lorem ipsum odor amet, consectetuer adipiscing elit. Primis eros nunc fringilla
                                        id rutrum nibh.
                                        Orci convallis pulvinar urna fusce at purus neque nam leo? Suspendisse semper
                                        facilisi
                                        parturient sit euismod placerat. Orci ante luctus praesent torquent orci commodo
                                        aptent blandit.
                                        Placerat arcu dui potenti; nullam taciti taciti amet.
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Кнопка
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="md">
                        <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
                            Blog Second
                        </Typography>
                        <Typography variant='h5' align="center" color="textSecondary" paragraph gutterBottom>
                            Lorem10 ********* ************ ************
                            Lorem10 ********* ************ ************
                            Lorem10 ********* ************ ************
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container sx={{mb: 8}} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" sx={{mr: 8}}>Start Now</Button>
                                </Grid>
                                <Grid>
                                    <Button variant="outlined" color="primary">Learn More</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        // style={{backgroundImage: `url(https://source.unsplash.com/random)`}}
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog Post
                                        </Typography>
                                        <Typography>
                                            Blog Post. WWW QQQ EEE
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>

                                        <AirplayIcon/>
                                        <PlayCircleIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <BottomNavigation
                    value={value}
                    onChange={handleChange}
                    className={classes.root}
                >
                    <BottomNavigationAction
                        label="Recents"
                        value="recents"
                        icon={<RestoreIcon/>}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        value="favorites"
                        icon={<FavoriteIcon/>}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        value="nearby"
                        icon={<LocationOnIcon/>}
                    />
                    <BottomNavigationAction
                        label="Folder"
                        value="folder"
                        icon={<FolderIcon/>}
                    />

                </BottomNavigation>
                <Typography align="center" color="textSecondary" component="p" subtitle1>
                    FOOTER
                </Typography>
            </footer>
        </>
    );
}

export default App;
